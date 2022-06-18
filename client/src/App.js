import React, { useState, useEffect } from "react";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import { Box, CircularProgress } from "@material-ui/core";
import Login from "./pages/Login.js";
import Questions from "./pages/Questions";
import Results from "./pages/Results";
import ResultDetails from "./pages/ResultDetails.js";
import SurveyLanding from "./pages/SurveyLanding";
import SurveyComplete from "./pages/SurveyComplete";
import { isLoggedIn } from "./utils/isLoggedIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    isLoggedIn().then((success) => {
      setStatus(success ? true : false);
    });
  }, []);
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (status === "loading") {
            return (
              <CircularProgress
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          } else if (status === true) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  const HomeRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (status === "loading") {
            return (
              <CircularProgress
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          } else {
            return <Component {...props} isLoggedIn={status} />;
          }
        }}
      />
    );
  };
  return (
    <Router>
      <Switch>
        <Box>
          <HomeRoute Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* need to convert to private route on production */}
          <Route path="/questions" component={Questions} />
          <Route path="/results" component={Results} />
          <Route path="/resultdetails" component={ResultDetails} />
          <Route path="/surveyComplete" component={SurveyComplete} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/surveylanding" component={SurveyLanding} />
        </Box>
      </Switch>
    </Router>
  );
}

export default App;
