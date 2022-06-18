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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

              <Grid item xs={12} sm={12}>
                <Grid container spacing={2} justify="center" direction="column">
                  <Grid item xs={10}>
                    <Typography variant="h3" style={{ position: "relative", left: "120px", width: "700px" }}>About</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container spacing={8}>
                      <Grid item xs="12" lg="6">
                        <Typography variant="h6" style={{ position: "relative", top: "20px", left: "120px", width: "750px" }}>
                          If you are running your own business (venture creation),
                          thinking of getting into business, or working to be a
                          changemaker within a business (value creation) and want to
                          know how you can develop yourself or your team in being
                          more entrepreneurial, measuring your entrepreneurial
                          mindset profile can evaluate where you are and how you can
                          work on personal and professional development.
                        </Typography>
                        <Typography variant="h6" style={{ position: "relative", top: "40px", left: "120px", width: "750px" }}>
                          Having an entrepreneurial mindset is essential to
                          innovation, a disciplined approach to entrepreneurship,
                          successful value creation, and personal and professional
                          development in a dynamic contemporary workscape.
                        </Typography>

                        <Typography variant="h6" style={{ position: "relative", top: "60px", left: "120px", width: "750px" }}>
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

              <Grid style={{ position: "relative", left: "400px", top: "100px", zIndex: 1 }}
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
                {/* entremap */}

                <Grid item xs={12}>
                  <Box pt={2}>
                    <Button
                      // component={Link}
                      // to={route}
                      variant="contained"
                      size="large"
                      color="primary"

                      className={classes.margin}
                      onClick={handleClickOpen}
                    >
                      Begin
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"PRIVACY POLICY"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Your privacy is important to us. It is The Practice Modern Dentistry’s policy to respect your privacy regarding any information we may collect from you across our website, https://thepracticedental.com.au, and other sites we own and operate.
                          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                          We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
                          We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                          You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                          Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="contained"
                          onClick={handleClose}
                        >
                          Disagree
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleClose}
                          autoFocus
                          component={Link}
                          to={route}
                        >
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>

                  </Box>
                </Grid>
                {/* button */}

              </Grid>

              {/* 上面部分 */}


            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            {" "}
            {/* Right Landing Grid Cell*/}
            <Box className={classes.landingImage} style={{ position: 'relative', top: "-100px", left: '270px', width: 250 }}>
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

          {/* <Grid item xs={12} sm={12}>
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
          </Grid> */}

          <Grid item xs={12} sm={12}>
            <Box height={75}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
