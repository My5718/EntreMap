import React from "react";
import { Box } from "@material-ui/core";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "../modern.css";
import "../components/questions.css";
import NavBar from "../components/NavBar";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
const QuestionsJSON = require("../components/TestQuestions.json");

var defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#43207B";
defaultThemeColors["$header-background-color"] = "#e13e64";
defaultThemeColors["$body-container-background-color"] = "#e13e64";
Survey.StylesManager.applyTheme("modern");

var myCss = {
  // matrix: {
  //   root: "table table-striped",
  // },
  navigationButton: "btn-small waves-effect waves-light",
};

let testResults = {
  BG1: true,
  BG2: true,
  BG4: "5-19 employees",
  BG3: "2018",
  BG5: "NT",
  BG6: "50,001 - 100,000",
  BG8: "2",
  BG7: "Food services",
  BG9: [
    "Business Accelerator",
    "Other Business Club",
    "Online Entrepreneurship Group",
  ],
  BG10: "Certificate or undergraduate diploma level",
  BG11: true,
  MAW: {
    MAWINTRI1: "4",
    MAWINTRI2: "4",
    MAWINTRI3: "4",
    MAWIDENT1: "4",
    MAWIDENT2: "4",
    MAWIDENT3: "4",
    MAWINTRO1: "4",
    MAWINTRO2: "4",
    MAWINTRO3: "4",
    MAWEXTER1: "4",
    MAWEXTER2: "4",
    MAWEXTER3: "4",
  },
  EP: {
    EPINV1: "4",
    EPINV2: "4",
    EPINV3: "4",
    EPINV4: "4",
    EPINV5: "4",
    EPFND1: "4",
    EPFND2: "4",
    EPFND3: "4",
    EPFND4: "4",
    EPDEV1: "4",
    EPDEV2: "4",
    EPDEV3: "4",
    EPDEV4: "4",
  },
  PS: {
    PSH1: "4",
    PSH2: "4",
    PSH3: "4",
    PSH4: "4",
    PSH5: "4",
    PSH6: "4",
    PSH7: "4",
    PSO8: "4",
    PSO9: "4",
    PSO10: "4",
    PSO11: "4",
    PSO12: "4",
    PSO13: "4",
    PSO14: "4",
  },
  IEP: {
    IEPR1: "4",
    IEPR2: "4",
    IEPR3: "4",
    IEPI1: "4",
    IEPI2: "4",
    IEPI3: "4",
    IEPI4: "4",
    IEPP1: "4",
    IEPP2: "4",
    IEPP3: "4",
  },
  ESE: {
    ESES1: "4",
    ESES2: "4",
    ESES3: "4",
    ESEP1: "4",
    ESEP2: "4",
    ESEP3: "4",
    ESEP4: "4",
    ESEM1: "4",
    ESEM2: "4",
    ESEM3: "4",
    ESEIP1: "4",
    ESEIP2: "4",
    ESEIP3: "4",
    ESEIP4: "4",
    ESEIP5: "4",
    ESEIP6: "4",
    ESEIF1: "4",
    ESEIF2: "4",
    ESEIF3: "4",
  },
  ATV: "Worthwhile",
  NE: ["NE2", "NE4", "NE5"],
  CF: {
    CF1: "4",
    CF2r: "4",
    CF3: "4",
    CF4r: "4",
    CF5: "4",
    CF6: "4",
    CF7r: "4",
    CF8: "4",
    CF9r: "4",
    CF10: "4",
    CF11r: "4",
    CF12: "4",
    CF13: "4",
    CF14: "4",
    CF15r: "4",
    CF16: "4",
    CF17r: "4",
    CF18: "4",
    CF19: "4",
    CF20: "4",
  },
  EMP: {
    EMP1: "4",
    EMP2r: "4",
    EMP3: "4",
    EMP4r: "4",
    EMP5: "4",
    EMP6: "4",
    EMP7r: "4",
    EMP8: "4",
    EMP10r: "4",
    EMP9: "4",
    EMP11r: "4",
    EMP12r: "4",
    EMP13: "4",
    EMP14r: "4",
    EMP15r: "4",
    EMP16: "4",
  },
  NTA: {
    NTA1: "4",
    NTA2: "4",
    NTA3r: "4",
    NTA4: "4",
    NTA5: "4",
  },
  GRI: {
    GRI1r: "4",
    GRI2: "4",
    GRI3r: "4",
    GRI4: "4",
    GRI5r: "4",
    GRI6: "4",
    GRI7r: "4",
    GRI8: "4",
    GRI9r: "4",
    GRI10: "4",
  },
  GO: {
    GO1: "4",
    GO2: "4",
    GO3: "4",
    GO4: "4",
  },
  GM: {
    GM1: "4",
    GM2: "4",
    GM3: "4",
  },
  TFA: {
    TFA1r: "4",
    TFA2r: "4",
    TFA3r: "4",
    TFA4r: "4",
    TFA5r: "4",
    TFA6r: "4",
    TFA7: "4",
    TFA8: "4",
    TFA9: "4",
    TFA10: "4",
    TFA11: "4",
    TFA12: "4",
    TFA13: "4",
  },
  RES: {
    RES1: "4",
    RES2: "4",
    RES3: "4",
    RES4: "4",
    RES5: "4",
    RES6: "4",
    RES7: "4",
    RES8: "4",
    RES9: "4",
    RES10: "4",
  },
  FOF: {
    FOFATFV1: "4",
    FOFATFV2: "4",
    FOFATFV3: "4",
    FOFPI1: "4",
    FOFPI2: "4",
    FOFPI3: "4",
    FOFTSE1: "4",
    FOFTSE2: "4",
    FOFTSE3: "4",
    FOFOC1: "4",
    FOFOC2: "4",
    FOFOC3: "4",
    FOFPA1: "4",
    FOFPA2: "4",
    FOFPA3: "4",
    FOFFS1: "4",
    FOFFS2: "4",
    FOFFS3: "4",
    FOFVC1: "4",
    FOFVC2: "4",
    FOFVC3: "4",
  },
  IS: {
    IS1: "4",
    IS2: "4",
    IS4: "4",
    IS5: "4",
    IS6: "4",
    IS7: "4",
    IS8: "4",
    IS9: "4",
    IS10: "4",
    IS11: "4",
    IS12: "4",
    IS13: "4",
    IS14: "4",
    IS15: "4",
    IS16: "4",
    IS17: "4",
    IS18: "4",
    IS19: "4",
    IS20: "4",
  },
  TB5: {
    TBFE1: "4",
    TBFA2r: "4",
    TBFC3: "4",
    TBFN4: "4",
    TBFO5: "4",
    TBF6Er: "4",
    TBFA7: "4",
    TBFC8r: "4",
    TBFN9r: "4",
    TBFO10: "4",
    TBFA12r: "4",
    TBFE11: "4",
    TBFC13: "4",
    TBFN14: "4",
    TBFO15: "4",
    TBFE16: "4",
    TBFA17: "4",
    TBFC18r: "4",
    TBFN19: "4",
    TBFO20: "4",
    TBFE21r: "4",
    TBFA22: "4",
    TBFC23r: "4",
    TBFN24r: "4",
    TBFO25: "4",
    TBFE26: "4",
    TBFA27r: "4",
    TBFC28: "4",
    TBFN29: "4",
    TBFO30: "4",
    TBFE31r: "4",
    TBFA32: "4",
    TBFC33: "4",
    TBFN34r: "4",
    TBFO35r: "4",
    TBFE36: "4",
    TBFA37r: "4",
    TBFC38: "4",
    TBFN39: "4",
    TBFO40: "4",
    TBFO41r: "4",
    TBFA42: "4",
    TBFC43r: "4",
    TBFO44: "4",
  },
};

function Questions() {
  const [completed, setCompleted] = useState(false);
  const onCompleteComponent = (res) => {
    fetch("/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({ results: testResults }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCompleted(data);
      });
  };

  if (completed == false) {
    return (
      <div
        style={{
          backgroundColor: "#272727",
          minHeight: "100vh",
        }}
      >
        <NavBar page="survey" />
        <div
          style={{
            margin: "auto",
            width: "70%",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <Box boxShadow={1} color="text.primary">
            <Survey.Survey
              json={QuestionsJSON}
              showCompletedPage={false}
              showProgressBar="top"
              css={myCss}
              onComplete={onCompleteComponent}
            />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect to={{ pathname: "/results", state: completed }}></Redirect>
    );
  }
}

export default Questions;
