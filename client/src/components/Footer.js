import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import linkedin_icon from "../resources/linkedin.svg";
import twitter_icon from "../resources/twitter.svg";
import facebook_icon from "../resources/facebook.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  alignItemsAndJustifyContent: {
    width: "100%",
    height: "15vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D96230",
    },
  },
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box className={classes.alignItemsAndJustifyContent}>
              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Typography variant="body1" align="left">
                    © Copyright 2021
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" align="right">
                    Contact: entremapco@gmail.com
                  </Typography>
                  <Typography variant="body1" align="right">
                    <a href="https://www.linkedin.com/company/entremap/">
                      <img src={linkedin_icon} alt="linkedin" />
                    </a>{" "}
                    <a href="https://twitter.com/entremap1">
                      <img src={twitter_icon} alt="twitter" />
                    </a>{" "}
                    <a href="https://twitter.com/entremap1">
                      <img src={facebook_icon} alt="facebook" />
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
