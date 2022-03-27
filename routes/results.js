var calculateResults = require("../utils/calculatedResults");
var express = require("express");
var router = express.Router();
var passport = require("passport");
var db = require("../db");

router.get("/", function (req, res) {
  if (req.user) {
    let surveyID = req.query.SurveyResults;
    return db
      .from("SurveyResults")
      .select("*")
      .where({ ID: surveyID })
      .then((results) => {
        if ((req.user[0].userID = results[0].userID)) {
          let calculatedResults = calculateResults(results[0]);
          calculatedResults.resultSet["name"] =
            req.user[0].given_name + " " + req.user[0].family_name;
          calculatedResults.resultSet["date"] = new Date().toISOString();
          res.send(calculatedResults);
        } else {
          res.status(401).send("User Unauthorised.");
        }
      });
  } else {
    res.status(401).send("User Unauthorised.");
  }
});

router.post("/", function (req, res) {
  //TODO: Client Authentication

  let resultsArray = {};

  //check each outer object to see value type.
  //if value type is an object, check if the first value contains a string and add to results array
  //if not a string, assume that the value is another object and add the value object to results array
  for (const section in req.body.results) {
    if (
      typeof req.body.results[section] === "object" &&
      req.body.results[section] !== null
    ) {
      if (typeof req.body.results[section][0] == "string") {
        resultsArray[section] = req.body.results[section];
      } else {
        for (var question in req.body.results[section]) {
          resultsArray[question] = req.body.results[section][question];
        }
      }
    } else if (
      typeof req.body.results[section] !== "object" &&
      req.body.results[section] !== null
    ) {
      resultsArray[section] = req.body.results[section];
    }
  }

  resultsArray["date"] = new Date().toISOString(); //set the survey date
  resultsArray["userID"] = req.user[0].userID; //set the userID based on req.user
  //console.log(resultsArray);

  //clone the results array to ensure that the reverse scoring method will
  //not alter the results inserted into the database
  const resultsCopy = JSON.parse(JSON.stringify(resultsArray));
  let calculatedResults = calculateResults(resultsCopy);
  calculatedResults.resultSet["name"] =
    req.user[0].given_name + " " + req.user[0].family_name;
  calculatedResults.resultSet["date"] = new Date().toISOString();

  return db
    .from("SurveyResults")
    .insert([resultsArray])
    .then(() => {
      return db
        .from("users")
        .where({ userID: req.user[0].userID })
        .update({ lastSurveyCompleted: calculatedResults.resultSet["date"] })
        .then(() => {
          res.send(calculatedResults);
        });
    });
});

module.exports = router;
