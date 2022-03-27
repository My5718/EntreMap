import React from "react";
import { Box } from "@material-ui/core";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../modern.css";
import "../components/questions.css";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer.js";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import surveyComplete from "../resources/surveyComplete.png";

const QuestionsJSON = require("../components/Questions.json");
var defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];

defaultThemeColors["$header-background-color"] = "#39AC7E";
defaultThemeColors["$body-container-background-color"] = "#39AC7E";
Survey.StylesManager.applyTheme("modern");

var myCss = {
  // matrix: {
  //   root: "table table-striped",
  // },
  navigationButton: "btn-small waves-effect waves-light",
};

function Questions() {
  const [completed, setCompleted] = useState(false);
  const [toResults, setToResults] = useState(false);
  const onCompleteComponent = (res) => {
    fetch("/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({ results: res.data }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCompleted(data);
      });
  };
  if (toResults === true) {
    return (
      <Redirect to={{ pathname: "/results", state: completed }}></Redirect>
    );
  } else if (completed === false) {
    return (
      <div
        style={{
          backgroundColor: "#F8F8F8",
          minHeight: "100vh",
        }}
      >
        <NavBar isLoggedIn={true} warning={true} />
        <div
          style={{
            margin: "auto",
            maxWidth: "1440px",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <Box boxShadow={4} color="text.primary">
            <Survey.Survey
              json={QuestionsJSON}
              showCompletedPage={false}
              showProgressBar="none"
              css={myCss}
              onComplete={onCompleteComponent}
              style={{ paddingTop: "10px" }}
            />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#F8F8F8",
            minHeight: "100vh",
          }}
        >
          <NavBar isLoggedIn={true} />
          <Paper
            style={{
              margin: "auto",
              maxWidth: "850px",
              marginTop: "50px",
              padding: "30px",
            }}
          >
            <Typography variant="h5">Evaluation Completed</Typography>
            <Divider />
            <Grid container spacing={4}>
              <Grid
                item
                xs="12"
                sm="7"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  paragraph
                  style={{ wordWrap: "break-word" }}
                >
                  Thank you for completing the Entremap Entrepreneurial Mindset
                  Activity Profile. We suggest returning to Entremap every 6 to
                  12 months to gage progress over time.
                </Typography>
              </Grid>
              <Grid item xs="12" sm="3">
                <img
                  src={surveyComplete}
                  width="315px"
                  style={{ paddingTop: "10px" }}
                  alt="Survey Complete"
                ></img>
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                textAlign: "center",
              }}
            >
              Click below to view your results.
            </Typography>

            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setToResults(true)}
              >
                Continue
              </Button>
            </div>
          </Paper>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              left: "50%",
              transform: "translate(-50%, 100%)",
            }}
          >
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
