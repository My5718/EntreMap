import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer.js";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import surveyComplete from "../resources/surveyComplete.png";

function SurveyComplete(props) {
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
                Activity Profile. We suggest returning to Entremap every 6 to 12
                months to gage progress over time.
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

export default SurveyComplete;
