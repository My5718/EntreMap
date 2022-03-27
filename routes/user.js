var express = require("express");
var router = express.Router();
var db = require("../db");

router.get("/icon", (req, res) => {
  if (req.user) {
    return res.status(200).json({ picture: req.user[0].picture });
  } else {
    return res.status(401).json({ success: false });
  }
});

router.get("/", (req, res) => {
  if (req.user) {
    return db
      .from("SurveyResults")
      .select("date", "ID")
      .where({ userID: req.user[0].userID })
      .then((results) => {
        res.status(200).json({
          fullName: req.user[0].given_name + " " + req.user[0].family_name,
          lastSurveyCompleted: req.user[0].lastSurveyCompleted,
          picture: req.user[0].picture,
          provider: req.user[0].provider,
          accountCreated: req.user[0].accountCreated,
          completedSurveys: results,
        }); // return the last date of the survey
      });
  } else {
    return res.status(401).json({ success: false });
  }
});

module.exports = router;
