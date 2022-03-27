import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.js";
import { makeStyles } from "@material-ui/core/styles";
import "../components/spinner.css";
import NavBar from "../components/NavBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfileCard from "../components/ProfileCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  landingImage: {
    width: "100%",
    height: "calc(100vh - 17vh)", //full page - header - footer
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export function LoggedIn() {
  const classes = useStyles();
  const [user, setUser] = useState("loading");

  useEffect(() => {
    let getUser = "/api/user";
    fetch(getUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const render = () => {
    if (user === "loading") {
      return (
        <div className="loader">
          <CircularProgress />
        </div>
      );
    } else if (user !== "loading") {
      return (
        <ProfileCard
          lastSurveyCompleted={user.lastSurveyCompleted}
          fullName={user.fullName}
          picture={user.picture}
          provider={user.provider}
          accountCreated={user.accountCreated}
          completedSurveys={user.completedSurveys}
        />
      );
    }
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundImage: "linear-gradient(#D9F2E8, white, white)",
          height: "calc(100vh)",
        }}
      >
        <NavBar isLoggedIn={true} />
        {render()}
      </div>
      <Footer />
    </div>
  );
}

export default LoggedIn;
