import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer.js";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import surveyLandingImage from "../resources/surveyLanding.png";

function SurveyLanding(props) {
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
          <Typography variant="h5">Before we begin...</Typography>
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
                You will be presented with a series of questions
                to assess the way you think In order to achieve accurate
                results we ask that you ensure each question is
                answered truthfully.
              </Typography>
            </Grid>
            <Grid item xs="12" sm="3">
              <img
                src={surveyLandingImage}
                width="315px"
                style={{ paddingTop: "10px" }}
                alt="Survey Landing"
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
            The estimated time to complete the survey is 50 minutes.
          </Typography>

          <div style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={"/questions"}
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

export default SurveyLanding;
