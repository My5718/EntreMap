var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
var db = require("./db");

module.exports = function (passport) {
  // Use the GoogleStrategy within Passport.
  //   Strategies in passport require a `verify` function, which accept
  //   credentials (in this case, a token, tokenSecret, and Google profile), and
  //   invoke a callback with a user object.

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GoogleClientID,
        clientSecret: process.env.GoogleClientSecret,
        callbackURL: process.env.absoluteURI + "/api/auth/google/callback",
      },
      function (token, tokenSecret, profile, done) {
        const queryUsers = db
          .from("users")
          .select("*")
          .where("email", "=", profile._json.email)
          .where("provider", "=", "Google");
        queryUsers.then((users) => {
          if (users[0] == undefined) {
            const newUser = {
              provider: "Google",
              providerToken: token,
              name: profile._json.name,
              given_name: profile._json.given_name,
              family_name: profile._json.family_name,
              email: profile._json.email,
              picture: profile._json.picture,
              lastSignIn: new Date().toISOString(),
              accountCreated: new Date().toISOString(),
            };
            return db
              .from("users")
              .insert(newUser)
              .returning("userID")
              .then((id) => {
                newUser.userID = id[0];
                done(null, newUser);
              });
          } else {
            const updateSignIn = db
              .from("users")
              .where({ userID: users[0].userID })
              .update({ lastSignIn: new Date().toISOString() });
            updateSignIn.then(() => {
              done(null, users[0]);
            });
          }
        });
      }
    )
  );

  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.linkedinKey,
        clientSecret: process.env.linkedinSecret,
        callbackURL: process.env.absoluteURI + "/api/auth/linkedin/callback",
        scope: ["r_emailaddress", "r_liteprofile"],
      },
      function (accessToken, refreshToken, profile, done) {
        const queryUsers = db
          .from("users")
          .select("*")
          .where("email", "=", profile.emails[0].value)
          .where("provider", "=", "LinkedIn");
        queryUsers.then((users) => {
          if (users[0] == undefined) {
            const newUser = {
              provider: "LinkedIn",
              providerToken: accessToken,
              name: profile.displayName,
              given_name: profile.name.givenName,
              family_name: profile.name.familyName,
              email: profile.emails[0].value,
              picture: profile.photos[1].value,
              lastSignIn: new Date().toISOString(),
              accountCreated: new Date().toISOString(),
            };
            return db
              .from("users")
              .insert(newUser)
              .returning("userID")
              .then((id) => {
                newUser.userID = id[0];
                done(null, newUser);
              });
          } else {
            const updateSignIn = db
              .from("users")
              .where({ userID: users[0].userID })
              .update({ lastSignIn: new Date().toISOString() });
            updateSignIn.then(() => {
              done(null, users[0]);
            });
          }
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.userID);
  });

  passport.deserializeUser(function (id, done) {
    const queryUsers = db.from("users").select("*").where("userID", "=", id);
    queryUsers.then((user) => {
      done(null, user);
    });
  });
};
