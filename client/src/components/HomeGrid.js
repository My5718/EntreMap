import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FittedImage from "react-fitted-image";
import PanelImage1 from "../resources/ResearchedPanelImage.png";
import PanelImage2 from "../resources/IterativePanelImage.png";
import PanelImage3 from "../resources/SecurePanelImage.png";
import LandingImage from "../resources/HomeLandingImage.png";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    height: 625,
  },
  landingText: {
    width: "100%",
    height: 625,
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
  panelboxtext: {
    width: "100%",
    height: 150,
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",
  },
  panelImage: {
    width: "100%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function HomeGrid(props) {
  const classes = useStyles();
  let [route, setRoute] = useState("/login");

  useEffect(() => {
    if (props.isLoggedIn === true) {
      setRoute("/profile");
    } // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Box mx="auto" width="90%">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
            <Box className={classes.landingText}>
              <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={12}>
                  <Typography variant="h4" align="left">
                    Explore your mindset with
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h2" align="left">
                    Entremap
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Box pt={2}>
                    <Button
                      component={Link}
                      to={route}
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.margin}
                    >
                      Begin
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            {" "}
            {/* Right Landing Grid Cell*/}
            <Box className={classes.landingImage}>
              <FittedImage
                fit="contain"
                onLoad={(...args) => console.log(...args)}
                onError={(...args) => console.log(...args)}
                src={LandingImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12} sm={12}>
              <Box className={classes.panelImage}>
                <FittedImage
                  fit="contain"
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src={PanelImage1}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box className={classes.panelboxtext}>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                      Researched{" "}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body1" align="center">
                      Entremap was designed utilising years of peer-reviewed
                      research and scale development.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12}>
              <Box className={classes.panelImage}>
                <FittedImage
                  fit="contain"
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src={PanelImage2}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box className={classes.panelboxtext}>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Grid item xs={10}>
                    <Typography variant="h4" align="center">
                      Iterative
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Typography variant="body1" align="center">
                      Designed to encourage education, benchmarking,
                      self-reflection and continual personal and professional
                      improvement.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12}>
              <Box className={classes.panelImage}>
                <FittedImage
                  fit="contain"
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src={PanelImage3}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.panelboxtext}>
                <Grid
                  container
                  spacing={0}
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Grid item xs={10}>
                    <Typography variant="h4" align="center">
                      Secure
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Typography variant="body1" align="center">
                      User information is kept secure and private. Any personal
                      details that are provided will not be shared in any way.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Box height={50}></Box>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid container spacing={2} justify="center" direction="column">
              <Grid item xs={10}>
                <Typography variant="h3">About</Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={8}>
                  <Grid item xs="12" lg="6">
                    <Typography variant="h6" style={{ paddingBottom: "20px" }}>
                      If you are running your own business (venture creation),
                      thinking of getting into business, or working to be a
                      changemaker within a business (value creation) and want to
                      know how you can develop yourself or your team in being
                      more entrepreneurial, measuring your entrepreneurial
                      mindset profile can evaluate where you are and how you can
                      work on personal and professional development.
                    </Typography>
                    <Typography variant="h6" style={{ paddingBottom: "20px" }}>
                      Having an entrepreneurial mindset is essential to
                      innovation, a disciplined approach to entrepreneurship,
                      successful value creation, and personal and professional
                      development in a dynamic contemporary workscape.
                    </Typography>

                    <Typography variant="h6">
                      Entremap helps you in industry, university and startup
                      projects to evaluate the degree to which you are utilizing
                      an entrepreneurial mindset and provides the context in
                      which you might develop it further.
                    </Typography>
                  </Grid>
                  <Grid item xs="12" lg="6"></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Box height={75}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
