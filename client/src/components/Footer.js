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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import emailjs from '@emailjs/browser';

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

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('Hello, I want to ask...');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail() {
    if(!email||!name||!phone||message==='Hello, I want to ask...'){
      window.alert("You need to fill in all the information!");
      return;
    }
    emailjs.send('service_entremap','template_zn5x1q8',{name:name,email:email,message:message,phone:phone},'W03K8G4xSMD875rSS')
      .then(res=>console.log(res))
      .catch(error=>console.log(error));
    handleClose();
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Box className={classes.alignItemsAndJustifyContent}>
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <Typography variant="body1" align="left">
                    © Copyright 2021
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1" align="center">
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
                <Grid item xs={4}>
                  <Typography variant="body1"  align="right" onClick={handleClickOpen}>
                    Contact: entremapco@gmail.com
                  </Typography>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        In order to contact us please enter your email, phone number and name.
                      </DialogContentText>
                      <form>
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="txtEmail"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <TextField
                        required
                        margin="dense"
                        id="txtPhone"
                        name="phone"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        onChange={(event) => setPhone(event.target.value)}
                      />
                      <TextField
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Your Name"
                        type="text"
                        fullWidth
                        onChange={(event) => setName(event.target.value)}
                      />
                      <TextField
                        required
                        multiline
                        margin="dense"
                        id="txtMessage"
                        name="message"
                        label="Message"
                        type="text"
                        fullWidth
                        defaultValue="Hello, I want to ask..."
                        onChange={(event) => setMessage(event.target.value)}
                      />
                      </form>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" onClick={handleClose}>Cancel</Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={sendEmail}
                      >Send</Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
