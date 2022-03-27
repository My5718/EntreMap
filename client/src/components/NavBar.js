import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../resources/EntremapLogo.png";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButtonText: {
    //fontSize: theme.typography.body1.fontSize,
    //fontWeight: "bold",
    marginRight: 10,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    let getUser = "/api/user/icon";
    fetch(getUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setIcon(data.picture);
      });
  }, []);

  const menu = () => {
    if (props.isLoggedIn === true && icon !== null) {
      return (
        <div>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Avatar alt="Patrick" src={icon} className={classes.large} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            disableScrollLock={true}
          >
            <MenuItem
              onClick={() => {
                if (props.warning === true) {
                  if (
                    window.confirm(
                      "Are you sure you want to leave?\nSurvey answers will be discarded."
                    )
                  ) {
                    window.location.href = "/profile";
                  }
                } else {
                  window.location.href = "/profile";
                }
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                if (props.warning === true) {
                  if (
                    window.confirm(
                      "Are you sure you want to sign out?\n Survey answers will be discarded."
                    )
                  ) {
                    fetch("/api/auth/logout").then((res) => {
                      if (res.status === 200) {
                        window.location.href = "/";
                      }
                    });
                  }
                } else {
                  fetch("/api/auth/logout").then((res) => {
                    if (res.status === 200) {
                      window.location.href = "/";
                    }
                  });
                }
              }}
            >
              Sign Out
            </MenuItem>
          </Menu>
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff">
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {menu()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
