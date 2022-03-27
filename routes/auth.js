var express = require("express");
var router = express.Router();
var passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/linkedin", passport.authenticate("linkedin"));

if (process.env.NODE_ENV === "production") {
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/profile",
      failureRedirect: "/login",
    })
  );
  router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
      successRedirect: "/profile",
      failureRedirect: "/login",
    })
  );
} else {
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3000/profile",
      failureRedirect: "http://localhost:3000/login",
    })
  );
  router.get(
    "/linkedin/callback",
    passport.authenticate("linkedin", {
      successRedirect: "http://localhost:3000/profile",
      failureRedirect: "http://localhost:3000/login",
    })
  );
}

router.get("/logout", function (req, res) {
  if (req.user) {
    req.logout();
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
});

router.get("/verify", function (req, res) {
  if (req.user) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
});

module.exports = router;
