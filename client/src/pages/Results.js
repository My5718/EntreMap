import React, { useRef, useEffect} from "react";
import { Box } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { getResponse } from "../utils/getResponse";
import Grid from "@material-ui/core/Grid";
import Progress from "@material-ui/core/LinearProgress";
import { format } from "date-fns";
import ResultFeedback from "../components/resultFeedback.json";
import { Bar, Radar } from "react-chartjs-2";
import Footer from "../components/Footer";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import ReactToPrint from 'react-to-print';
import { Link } from "react-router-dom";
import   calculateResults from "../utils/calculated";

function Results(props) {

  const [open, setOpen] = React.useState(false);
  //store data of MotivationAtWork
  const [MotivationAtWorkIntrinsic, setMotivationAtWorkIntrinsic] = React.useState(0);
  const [MotivationAtWorkIdentified, setMotivationAtWorkIdentified] = React.useState(0);
  const [MotivationAtWorkIntrojected, setMotivationAtWorkIntrojected] = React.useState(0);
  const [MotivationAtWorkExternalMotivation, setMotivationAtWorkExternalMotivation] = React.useState(0);
  //store data of EntrepreneurialPassion
  const [EntrepreneurialPassionInventing, setEntrepreneurialPassionInventing] = React.useState(0);
  const [EntrepreneurialPassionFounding, setEntrepreneurialPassionFounding] = React.useState(0);
  const [EntrepreneurialPassionDeveloping, setEntrepreneurialPassionDeveloping] = React.useState(0);
  //store data of IndividualEntrepreneurialOrientation
  const [IndividualEntrepreneurialOrientationRiskTaking, setIndividualEntrepreneurialOrientationRiskTaking] = React.useState(0);
  const [IndividualEntrepreneurialOrientationInnovativeness, setIndividualEntrepreneurialOrientationInnovativeness] = React.useState(0);
  const [IndividualEntrepreneurialOrientationProactivity, setIndividualEntrepreneurialOrientationProactivity] = React.useState(0);
  // //store data of EntrepreneurialSelfEfficacy
  const [EntrepreneurialSelfEfficacySearching, setEntrepreneurialSelfEfficacySearching] = React.useState(0);
  const [EntrepreneurialSelfEfficacyPlanning, setEntrepreneurialSelfEfficacyPlanning] = React.useState(0);
  const [EntrepreneurialSelfEfficacyMarshaling, setEntrepreneurialSelfEfficacyMarshaling] = React.useState(0);
  const [EntrepreneurialSelfEfficacyImplementingPeople, setEntrepreneurialSelfEfficacyImplementingPeople] = React.useState(0);
  const [EntrepreneurialSelfEfficacyImplementingFinancial, setEntrepreneurialSelfEfficacyImplementingFinancial] = React.useState(0);
  // //store data of FearOfFailure
  const [FearOfFailureAbilityToFundTheVenture, setFearOfFailureAbilityToFundTheVenture] = React.useState(0);
  const [FearOfFailurePotentialOfTheIdea, setFearOfFailurePotentialOfTheIdea] = React.useState(0);
  const [FearOfFailureThreatToSocialEsteem, setFearOfFailureThreatToSocialEsteem] = React.useState(0);
  const [FearOfFailureOpportunityCosts, setFearOfFailureOpportunityCosts] = React.useState(0);
  const [FearOfFailurePersonalAbility, setFearOfFailurePersonalAbility] = React.useState(0);
  const [FearOfFailureFinancialSecurity, setFearOfFailureFinancialSecurity] = React.useState(0);
  const [FearOfFailureVenturesCapacity, setFearOfFailureVenturesCapacity] = React.useState(0);
  // //store data of TheBigFive
  const [TheBigFiveExtraversion, setTheBigFiveExtraversion] = React.useState(0);
  const [TheBigFiveAgreeableness, setTheBigFiveAgreeableness] = React.useState(0);
  const [TheBigFiveConscientiousness, setTheBigFiveConscientiousness] = React.useState(0);
  const [TheBigFiveNeuroticism, setTheBigFiveNeuroticism] = React.useState(0);
  const [TheBigFiveOpenness, setTheBigFiveOpenness] = React.useState(0);

  const [type, setType] = React.useState({
    name: "",
    path: "PassionScale.HarmoniousPassion",
    res: 0
  });

    function getall() { 
    fetch("/api/results/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
      // get MotivationAtWork
      let MotivationAtWorkIntrinsic = 0;
      let MotivationAtWorkIdentified = 0;
      let MotivationAtWorkIntrojected = 0;
      let MotivationAtWorkExternalMotivation = 0;
      //EntrepreneurialPassion
      let EntrepreneurialPassionInventing = 0;
      let EntrepreneurialPassionFounding = 0;
      let EntrepreneurialPassionDeveloping = 0;
      //IndividualEntrepreneurialOrientation
      let IndividualEntrepreneurialOrientationRiskTaking = 0;
      let IndividualEntrepreneurialOrientationInnovativeness = 0;
      let IndividualEntrepreneurialOrientationProactivity = 0;
      //EntrepreneurialSelfEfficacy
      let EntrepreneurialSelfEfficacySearching = 0;
      let EntrepreneurialSelfEfficacyPlanning = 0;
      let EntrepreneurialSelfEfficacyMarshaling = 0;
      let EntrepreneurialSelfEfficacyImplementingPeople = 0;
      let EntrepreneurialSelfEfficacyImplementingFinancial = 0;
      //FearOfFailure
      let FearOfFailureAbilityToFundTheVenture = 0;
      let FearOfFailurePotentialOfTheIdea = 0;
      let FearOfFailureThreatToSocialEsteem = 0;
      let FearOfFailureOpportunityCosts = 0;
      let FearOfFailurePersonalAbility = 0;
      let FearOfFailureFinancialSecurity = 0;
      let FearOfFailureVenturesCapacity = 0;
      //TheBigFive
      let TheBigFiveExtraversion = 0;
      let TheBigFiveAgreeableness = 0;
      let TheBigFiveConscientiousness = 0;
      let TheBigFiveNeuroticism = 0;
      let TheBigFiveOpenness = 0;


      for(let i = 0; i<data.length - 1; i++)
      {
        //MotivationAtWork
        if(!isNaN(calculateResults(data[i]).resultSet.MotivationAtWork.Intrinsic))
        {
          MotivationAtWorkIntrinsic += calculateResults(data[i]).resultSet.MotivationAtWork.Intrinsic;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.MotivationAtWork.Identified))
        {
          MotivationAtWorkIdentified += calculateResults(data[i]).resultSet.MotivationAtWork.Identified;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.MotivationAtWork.Introjected))
        {
          MotivationAtWorkIntrojected += calculateResults(data[i]).resultSet.MotivationAtWork.Introjected;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.MotivationAtWork.ExternalMotivation))
        {
          MotivationAtWorkExternalMotivation += calculateResults(data[i]).resultSet.MotivationAtWork.ExternalMotivation;
        }
        //EntrepreneurialPassion
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialPassion.Inventing))
        {
          EntrepreneurialPassionInventing += calculateResults(data[i]).resultSet.EntrepreneurialPassion.Inventing;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialPassion.Founding))
        {
          EntrepreneurialPassionFounding += calculateResults(data[i]).resultSet.EntrepreneurialPassion.Founding;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialPassion.Developing))
        {
          EntrepreneurialPassionDeveloping += calculateResults(data[i]).resultSet.EntrepreneurialPassion.Developing;
        }
        //IndividualEntrepreneurialOrientation
        if(!isNaN(calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.RiskTaking))
        {
          IndividualEntrepreneurialOrientationRiskTaking += calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.RiskTaking;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.Innovativeness))
        {
          IndividualEntrepreneurialOrientationInnovativeness += calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.Innovativeness;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.Proactivity))
        {
          IndividualEntrepreneurialOrientationProactivity += calculateResults(data[i]).resultSet.IndividualEntrepreneurialOrientation.Proactivity;
        }
        //EntrepreneurialSelfEfficacy
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Searching))
        {
          EntrepreneurialSelfEfficacySearching += calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Searching;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Planning))
        {
          EntrepreneurialSelfEfficacyPlanning += calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Planning;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Marshaling))
        {
          EntrepreneurialSelfEfficacyMarshaling += calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.Marshaling;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.ImplementingPeople))
        {
          EntrepreneurialSelfEfficacyImplementingPeople += calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.ImplementingPeople;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.ImplementingFinancial))
        {
          EntrepreneurialSelfEfficacyImplementingFinancial += calculateResults(data[i]).resultSet.EntrepreneurialSelfEfficacy.ImplementingFinancial;
        }
        //FearOfFailure
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.AbilityToFundTheVenture))
        {
          FearOfFailureAbilityToFundTheVenture += calculateResults(data[i]).resultSet.FearOfFailure.AbilityToFundTheVenture;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.PotentialOfTheIdea))
        {
          FearOfFailurePotentialOfTheIdea += calculateResults(data[i]).resultSet.FearOfFailure.PotentialOfTheIdea;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.ThreatToSocialEsteem))
        {
          FearOfFailureThreatToSocialEsteem += calculateResults(data[i]).resultSet.FearOfFailure.ThreatToSocialEsteem;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.OpportunityCosts))
        {
          FearOfFailureOpportunityCosts += calculateResults(data[i]).resultSet.FearOfFailure.OpportunityCosts;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.PersonalAbility))
        {
          FearOfFailurePersonalAbility += calculateResults(data[i]).resultSet.FearOfFailure.PersonalAbility;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.FinancialSecurity))
        {
          FearOfFailureFinancialSecurity += calculateResults(data[i]).resultSet.FearOfFailure.FinancialSecurity;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.FearOfFailure.VenturesCapacity))
        {
          FearOfFailureVenturesCapacity += calculateResults(data[i]).resultSet.FearOfFailure.VenturesCapacity;
        }
        //TheBigFive
        if(!isNaN(calculateResults(data[i]).resultSet.TheBigFive.Extraversion))
        {
          TheBigFiveExtraversion += calculateResults(data[i]).resultSet.TheBigFive.Extraversion;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.TheBigFive.Agreeableness))
        {
          TheBigFiveAgreeableness += calculateResults(data[i]).resultSet.TheBigFive.Agreeableness;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.TheBigFive.Conscientiousness))
        {
          TheBigFiveConscientiousness += calculateResults(data[i]).resultSet.TheBigFive.Conscientiousness;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.TheBigFive.Neuroticism))
        {
          TheBigFiveNeuroticism += calculateResults(data[i]).resultSet.TheBigFive.Neuroticism;
        }
        if(!isNaN(calculateResults(data[i]).resultSet.TheBigFive.Openness))
        {
          TheBigFiveOpenness += calculateResults(data[i]).resultSet.TheBigFive.Openness;
        }
      }
      //MotivationAtWork
      setMotivationAtWorkIntrinsic((MotivationAtWorkIntrinsic/(data.length -1)).toFixed(3));
      setMotivationAtWorkIdentified((MotivationAtWorkIdentified/(data.length -1)).toFixed(3));
      setMotivationAtWorkIntrojected((MotivationAtWorkIntrojected/(data.length -1)).toFixed(3));
      setMotivationAtWorkExternalMotivation((MotivationAtWorkExternalMotivation/(data.length -1)).toFixed(3));
      //EntrepreneurialPassion
      setEntrepreneurialPassionInventing((EntrepreneurialPassionInventing/(data.length -1)).toFixed(3));
      setEntrepreneurialPassionFounding((EntrepreneurialPassionFounding/(data.length -1)).toFixed(3));
      setEntrepreneurialPassionDeveloping((EntrepreneurialPassionDeveloping/(data.length -1)).toFixed(3));
      //IndividualEntrepreneurialOrientation
      setIndividualEntrepreneurialOrientationRiskTaking((IndividualEntrepreneurialOrientationRiskTaking/(data.length -1)).toFixed(3));
      setIndividualEntrepreneurialOrientationInnovativeness((IndividualEntrepreneurialOrientationInnovativeness/(data.length -1)).toFixed(3));
      setIndividualEntrepreneurialOrientationProactivity((IndividualEntrepreneurialOrientationProactivity/(data.length -1)).toFixed(3));
      //EntrepreneurialSelfEfficacy
      setEntrepreneurialSelfEfficacySearching((EntrepreneurialSelfEfficacySearching/(data.length -1)).toFixed(3));
      setEntrepreneurialSelfEfficacyPlanning((EntrepreneurialSelfEfficacyPlanning/(data.length -1)).toFixed(3));
      setEntrepreneurialSelfEfficacyMarshaling((EntrepreneurialSelfEfficacyMarshaling/(data.length -1)).toFixed(3));
      setEntrepreneurialSelfEfficacyImplementingPeople((EntrepreneurialSelfEfficacyImplementingPeople/(data.length -1)).toFixed(3));
      setEntrepreneurialSelfEfficacyImplementingFinancial((EntrepreneurialSelfEfficacyImplementingFinancial/(data.length -1)).toFixed(3)); 
      //FearOfFailure
      setFearOfFailureAbilityToFundTheVenture((FearOfFailureAbilityToFundTheVenture/(data.length -1)).toFixed(3));
      setFearOfFailurePotentialOfTheIdea((FearOfFailurePotentialOfTheIdea/(data.length -1)).toFixed(3));
      setFearOfFailureThreatToSocialEsteem((FearOfFailureThreatToSocialEsteem/(data.length -1)).toFixed(3));
      setFearOfFailureOpportunityCosts((FearOfFailureOpportunityCosts/(data.length -1)).toFixed(3));
      setFearOfFailurePersonalAbility((FearOfFailurePersonalAbility/(data.length -1)).toFixed(3)); 
      setFearOfFailureFinancialSecurity((FearOfFailureFinancialSecurity/(data.length -1)).toFixed(3));  
      setFearOfFailureVenturesCapacity((FearOfFailureVenturesCapacity/(data.length -1)).toFixed(3)); 
      //TheBigFive  
      setTheBigFiveExtraversion((TheBigFiveExtraversion/(data.length -1)).toFixed(3));
      setTheBigFiveAgreeableness((TheBigFiveAgreeableness/(data.length -1)).toFixed(3));
      setTheBigFiveConscientiousness((TheBigFiveConscientiousness/(data.length -1)).toFixed(3));
      setTheBigFiveNeuroticism((TheBigFiveNeuroticism/(data.length -1)).toFixed(3));
      setTheBigFiveOpenness((TheBigFiveOpenness/(data.length -1)).toFixed(3)); 
    });

      // fetch("/api/results", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "same-origin",
      //   // body: JSON.stringify({ results: res.data }),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     // setCompleted(data);
      //     console.log(data);
      //   });
  };
  
  useEffect(()=>{
    getall()
  },[])

  const handleClickOpen = (type) => {
    setType(type);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const componentRef = useRef();

  let resultSet = props.location.state.resultSet;

  function SectionProgress(props) {
    return (
      <div>
        <Typography
          variant="body2"
          style={{
            paddingTop: "5px",
            paddingBottom: "5px",
            textAlign: "center",
          }}
        >
          {props.name}
        </Typography>
        <Progress
          variant="determinate"
          value={props.value}
          style={{ height: "10px", maxWidth: "100px", margin: "auto" }}
        />
      </div>
    )
  }

  let MaWdata = {
    labels: ["Intrinsic", "Identified", "Introjected", "External Motivation"],
    datasets: [
      {
        label: "My Data",
        data: [
          (resultSet.MotivationAtWork.Intrinsic /
            ResultFeedback.MotivationAtWork.Intrinsic.scale.max) *
          100,
          (resultSet.MotivationAtWork.Identified /
            ResultFeedback.MotivationAtWork.Identified.scale.max) *
          100,
          (resultSet.MotivationAtWork.Introjected /
            ResultFeedback.MotivationAtWork.Introjected.scale.max) *
          100,
          (resultSet.MotivationAtWork.ExternalMotivation /
            ResultFeedback.MotivationAtWork.ExternalMotivation.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(217, 98, 48, 0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
      },
      {
        label: "Others Data",
        data: [
          (MotivationAtWorkIntrinsic / ResultFeedback.MotivationAtWork.Intrinsic.scale.max) * 100, 
          (MotivationAtWorkIdentified / ResultFeedback.MotivationAtWork.Identified.scale.max) * 100, 
          (MotivationAtWorkIntrojected / ResultFeedback.MotivationAtWork.Introjected.scale.max) * 100, 
          (MotivationAtWorkExternalMotivation / ResultFeedback.MotivationAtWork.ExternalMotivation.scale.max) * 100
        ],
        backgroundColor: [
          "rgba(74, 73, 72, 0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let MaWoptions = {
    // plugins: {
    //   legend: {
    //     labels: {
    //       font: {
    //         size: 5
    //       }
    //     }
    //   }
    // },
    scales: {
      x: {
        ticks: {
          font: {
            size: 9
          }
        },
        //  display: false,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  let EPdata = {
    labels: ["Inventing", "Founding", "Developing"],
    datasets: [
      {
        label: "My Data",
        data: [
          (resultSet.EntrepreneurialPassion.Inventing /
            ResultFeedback.EntrepreneurialPassion.Inventing.scale.max) *
          100,
          (resultSet.EntrepreneurialPassion.Founding /
            ResultFeedback.EntrepreneurialPassion.Founding.scale.max) *
          100,
          (resultSet.EntrepreneurialPassion.Developing /
            ResultFeedback.EntrepreneurialPassion.Developing.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(217, 98, 48, 0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(217, 98, 48)",
        ],
      },
      {
        label: "Others Data",
        data: [
          (EntrepreneurialPassionInventing /
            ResultFeedback.EntrepreneurialPassion.Inventing.scale.max) *
          100,
          (EntrepreneurialPassionFounding /
            ResultFeedback.EntrepreneurialPassion.Founding.scale.max) *
          100,
          (EntrepreneurialPassionDeveloping /
            ResultFeedback.EntrepreneurialPassion.Developing.scale.max) *
          100,
        ]
          ,
        backgroundColor: [
          "rgba(74, 73, 72, 0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(74, 73, 72)",
        ],
      },
    ],
  };

  let EPOptions = {
    scale: {
      max: 100,
      min: 0,
    },
    plugins: {
      legend: {
        labels: { padding: 2 }
      }
    }
  };

  let IEOData = {
    labels: ["Risk Taking", "Innovativeness", "Proactivity"],
    datasets: [
      {
        label: "My Data",
        data: [
          (resultSet.IndividualEntrepreneurialOrientation.RiskTaking /
            ResultFeedback.IndividualEntrepreneurialOrientation.RiskTaking.scale.max) *
          100,
          (resultSet.IndividualEntrepreneurialOrientation.Innovativeness /
            ResultFeedback.IndividualEntrepreneurialOrientation.Innovativeness.scale.max) *
          100,
          (resultSet.IndividualEntrepreneurialOrientation.Proactivity /
            ResultFeedback.IndividualEntrepreneurialOrientation.Proactivity.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(217, 98, 48, 0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(217, 98, 48)",
        ],
      },
      {
        label: "Others Data",
        data: [
          (IndividualEntrepreneurialOrientationRiskTaking /
            ResultFeedback.IndividualEntrepreneurialOrientation.RiskTaking.scale.max) *
          100,
          (IndividualEntrepreneurialOrientationInnovativeness /
            ResultFeedback.IndividualEntrepreneurialOrientation.Innovativeness.scale.max) *
          100,
          (IndividualEntrepreneurialOrientationProactivity /
            ResultFeedback.IndividualEntrepreneurialOrientation.Proactivity.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(74, 73, 72, 0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(74, 73, 72)",
        ],
      },
    ],
  };

  let IEOOptions = {
    scale: {
      max: 100,
      min: 0,
    },
  };

  let ESEData = {
    labels: [
      "Searching",
      "Planning",
      "Marshaling",
      "Implementing (People)",
      "Implementing (Financial)",
    ],
    datasets: [
      {
        label: "My Data",
        data: [
          (resultSet.EntrepreneurialSelfEfficacy.Searching /
            ResultFeedback.EntrepreneurialSelfEfficacy.Searching.scale.max) *
          100,
          (resultSet.EntrepreneurialSelfEfficacy.Planning /
            ResultFeedback.EntrepreneurialSelfEfficacy.Planning.scale.max) *
          100,
          (resultSet.EntrepreneurialSelfEfficacy.Marshaling /
            ResultFeedback.EntrepreneurialSelfEfficacy.Marshaling.scale.max) *
          100,
          (resultSet.EntrepreneurialSelfEfficacy.ImplementingPeople /
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingPeople.scale.max) *
          100,
          (resultSet.EntrepreneurialSelfEfficacy.ImplementingFinancial /
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingFinancial
              .scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(217, 98, 48, 0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
      },
      {
        label: "Others Data",
        data: [
          (EntrepreneurialSelfEfficacySearching /
            ResultFeedback.EntrepreneurialSelfEfficacy.Searching.scale.max) *
          100,
          (EntrepreneurialSelfEfficacyPlanning /
            ResultFeedback.EntrepreneurialSelfEfficacy.Planning.scale.max) *
          100,
          (EntrepreneurialSelfEfficacyMarshaling /
            ResultFeedback.EntrepreneurialSelfEfficacy.Marshaling.scale.max) *
          100,
          (EntrepreneurialSelfEfficacyImplementingPeople /
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingPeople.scale.max) *
          100,
          (EntrepreneurialSelfEfficacyImplementingFinancial /
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingFinancial.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(74, 73, 72, 0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(74, 73, 72)",
        ],
      },
    ],
  };

  let ESEOptions = {
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  let FOFData = {
    labels: [
      "Ability to Fund the Venture",
      "Potential of the Idea",
      "Threat to Social Esteem",
      "Opportunity Costs",
      "Personal Ability",
      "Financial Security",
      "Ventures Capacity",
    ],
    datasets: [
      {
        label: "My Data",
        data: [
          (resultSet.FearOfFailure.AbilityToFundTheVenture /
            ResultFeedback.FearOfFailure.AbilityToFundTheVenture.scale.max) *
          100,
          (resultSet.FearOfFailure.PotentialOfTheIdea /
            ResultFeedback.FearOfFailure.PotentialOfTheIdea.scale.max) *
          100,
          (resultSet.FearOfFailure.ThreatToSocialEsteem /
            ResultFeedback.FearOfFailure.ThreatToSocialEsteem.scale.max) *
          100,
          (resultSet.FearOfFailure.OpportunityCosts /
            ResultFeedback.FearOfFailure.OpportunityCosts.scale.max) *
          100,

          (resultSet.FearOfFailure.PersonalAbility /
            ResultFeedback.FearOfFailure.PersonalAbility.scale.max) *
          100,
          (resultSet.FearOfFailure.FinancialSecurity /
            ResultFeedback.FearOfFailure.FinancialSecurity.scale.max) *
          100,
          (resultSet.FearOfFailure.VenturesCapacity /
            ResultFeedback.FearOfFailure.VenturesCapacity.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(217, 98, 48, 0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
      },
      {
        label: "Others Data",
        data: [
          (FearOfFailureAbilityToFundTheVenture /
            ResultFeedback.FearOfFailure.AbilityToFundTheVenture.scale.max) *
          100,
          (FearOfFailurePotentialOfTheIdea /
            ResultFeedback.FearOfFailure.PotentialOfTheIdea.scale.max) *
          100,
          (FearOfFailureThreatToSocialEsteem /
            ResultFeedback.FearOfFailure.ThreatToSocialEsteem.scale.max) *
          100,
          (FearOfFailureOpportunityCosts /
            ResultFeedback.FearOfFailure.OpportunityCosts.scale.max) *
          100,

          (FearOfFailurePersonalAbility /
            ResultFeedback.FearOfFailure.PersonalAbility.scale.max) *
          100,
          (FearOfFailureFinancialSecurity /
            ResultFeedback.FearOfFailure.FinancialSecurity.scale.max) *
          100,
          (FearOfFailureVenturesCapacity /
            ResultFeedback.FearOfFailure.VenturesCapacity.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgba(74, 73, 72, 0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(74, 73, 72)",
        ],
      },
    ],
  };

  let FOFOptions = {

    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  let TBFdata = {
    labels: [
      "Extraversion",
      "Agreeableness",
      "Conscientiousness",
      "Neuroticism",
      "Openness",
    ],
    datasets: [
      {
        label: 'My Data',
        data: [
          (resultSet.TheBigFive.Extraversion /
            ResultFeedback.TheBigFive.Extraversion.scale.max) *
          100,
          (resultSet.TheBigFive.Agreeableness /
            ResultFeedback.TheBigFive.Agreeableness.scale.max) *
          100,
          (resultSet.TheBigFive.Conscientiousness /
            ResultFeedback.TheBigFive.Conscientiousness.scale.max) *
          100,
          (resultSet.TheBigFive.Neuroticism /
            ResultFeedback.TheBigFive.Neuroticism.scale.max) *
          100,
          (resultSet.TheBigFive.Openness /
            ResultFeedback.TheBigFive.Openness.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgb(217, 98, 48 ,0.2)",
        ],
        borderColor: [
          "rgb(217, 98, 48)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(217, 98, 48)",
        ],
      },
      {
        label: 'Others Data',
        data: [
          (TheBigFiveExtraversion /
            ResultFeedback.TheBigFive.Extraversion.scale.max) *
          100,
          (TheBigFiveAgreeableness /
            ResultFeedback.TheBigFive.Agreeableness.scale.max) *
          100,
          (TheBigFiveConscientiousness /
            ResultFeedback.TheBigFive.Conscientiousness.scale.max) *
          100,
          (TheBigFiveNeuroticism /
            ResultFeedback.TheBigFive.Neuroticism.scale.max) *
          100,
          (TheBigFiveOpenness /
            ResultFeedback.TheBigFive.Openness.scale.max) *
          100,
        ],
        backgroundColor: [
          "rgb(74, 73, 72 ,0.2)",
        ],
        borderColor: [
          "rgb(74, 73, 72)",
        ],
        borderWidth: 1,
        pointBackgroundColor: [
          "rgb(74, 73, 72)",
        ],
      },
    ],
  };

  let TBFOptions = {
    scale: {
      max: 100,
      min: 0,
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#F8F8F8",
      }}
    >
      <NavBar isLoggedIn={true} />
      <div
        style={{
          margin: "auto",
          width: "100%",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <Box
          boxShadow={1}
          color="text.primary"
          id={"Result"}
          style={{
            margin: "auto",
            width: "794px",
            backgroundColor: "white",
            padding: "3vw",
            marginBottom: "10px"
          }}
        >
          <ReactToPrint
            trigger={() => <Button variant="contained" size="large" color="primary" style={{ marginRight: "50px" }}>Download/Print</Button>}
            pageStyle="@media all {
              .page-break {
                display: none;
              }
            }
            @media print {
              html, body {
                height: initial !important;
                overflow: initial !important;
                -webkit-print-color-adjust: exact;
              }
            }
            @media print {
              .page-break {
                margin-top: 1rem;
                display: block;
                page-break-before: auto;
              }
            }
            @page {
              size: auto;
              margin: 10mm;
            }"
            content={() => componentRef.current} />
          <Button variant="contained" size="large" color="primary" component={Link} to={{ pathname: "/resultdetails", state: props.location.state }}>Details</Button>
        </Box>
        <Box
          boxShadow={1}
          color="text.primary"
          id={"Result"}
          style={{
            margin: "auto",
            width: "794px",
            height: "1123px",
            backgroundColor: "white",
            padding: "3vw",
          }}
        >
          <div
            ref={componentRef}
            style={{
              width: "790px",
              height: "1120px"
            }}
          >
            {/* 标题 */}
            <Typography variant="h5" align="center" >
              Entremap Mindset Report
            </Typography>
            <Typography variant="body2" >
              {resultSet.name}
            </Typography>
            <Grid container spacing={1}>
              <Grid variant="body2" item xs="6">
                {format(new Date(resultSet.date), "dd/MM/yyyy")}
              </Grid>
              <Grid item xs="6" align="right">
              </Grid>
            </Grid>
            <Divider></Divider>
            <Typography variant="body2">Pending summary.</Typography>

            <Grid container spacing={1}>


              <Grid item xs="6" >
                <Grid container spacing={0} >
                  <Grid item xs="12">
                    <Typography
                      variant="body1"
                      style={{ textAlign: "center" }}
                      gutterBottom
                    >
                      Passion Scale
                    </Typography>

                    <Grid container spacing={1}>
                      <Grid item xs="6" onClick={() => {
                        handleClickOpen({
                          name: "Harmonious Passion",
                          path: "PassionScale.HarmoniousPassion",
                          res: resultSet.PassionScale.HarmoniousPassion
                        });
                      }}>
                        <Typography
                          variant="body1"
                          style={{ textAlign: "center" }}
                          gutterBottom
                        >
                          Harmonious Passion
                        </Typography>
                        <Progress
                          variant="determinate"
                          value={
                            (resultSet.PassionScale.HarmoniousPassion /
                              ResultFeedback.PassionScale.HarmoniousPassion.scale.max) *
                            100
                          }
                          style={{ height: "10px", maxWidth: "165px", margin: "auto" }}
                        />
                      </Grid>
                      <Grid item xs="6" onClick={() => {
                        handleClickOpen({
                          name: "Obsessive Passion",
                          path: "PassionScale.ObsessivePassion",
                          res: resultSet.PassionScale.ObsessivePassion
                        });
                      }}>
                        <Typography
                          variant="body1"
                          style={{ textAlign: "center" }}
                          gutterBottom
                        >
                          Obsessive Passion
                        </Typography>
                        <Progress
                          variant="determinate"
                          value={
                            (resultSet.PassionScale.ObsessivePassion /
                              ResultFeedback.PassionScale.ObsessivePassion.scale.max) *
                            100
                          }
                          style={{ height: "10px", maxWidth: "165px", margin: "auto" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="12"  >
                    <Grid container spacing={1} >
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Cognitive Flexibility",
                          path: "CognitiveFlexibility.Total",
                          res: resultSet.CognitiveFlexibility.Total
                        });
                      }}>
                        <SectionProgress
                          name="Cognitive Flexibility"
                          value={
                            (resultSet.CognitiveFlexibility.Total /
                              ResultFeedback.CognitiveFlexibility.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Empathy",
                          path: "Empathy.Total",
                          res: resultSet.Empathy.Total
                        });
                      }}>
                        <SectionProgress
                          name="Empathy"
                          value={
                            (resultSet.Empathy.Total /
                              ResultFeedback.Empathy.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Need to Achieve",
                          path: "NeedToAchieve.Total",
                          res: resultSet.NeedToAchieve.Total
                        });
                      }}>
                        <SectionProgress
                          name="Need to Achieve"
                          value={
                            (resultSet.NeedToAchieve.Total /
                              ResultFeedback.NeedToAchieve.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Grit",
                          path: "Grit.Total",
                          res: resultSet.Grit.Total
                        });
                      }}>
                        <SectionProgress
                          name="Grit"
                          value={
                            (resultSet.Grit.Total / ResultFeedback.Grit.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Growth Orientation",
                          path: "GrowthOrientation.Total",
                          res: resultSet.GrowthOrientation.Total
                        });
                      }}>
                        <SectionProgress
                          name="Growth Orientation"
                          value={
                            (resultSet.GrowthOrientation.Total /
                              ResultFeedback.GrowthOrientation.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Tolerate Ambiguity",
                          path: "ToleranceForAmbiguity.Total",
                          res: resultSet.ToleranceForAmbiguity.Total
                        });
                      }}>
                        <SectionProgress
                          name="Tolerate Ambiguity"
                          value={
                            (resultSet.ToleranceForAmbiguity.Total /
                              ResultFeedback.ToleranceForAmbiguity.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Resilience",
                          path: "Resilience.Total",
                          res: resultSet.Resilience.Total
                        });
                      }}>
                        <SectionProgress
                          name="Resilience"
                          value={
                            (resultSet.Resilience.Total /
                              ResultFeedback.Resilience.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Growth Mindset",
                          path: "GrowthMindset.Total",
                          res: 15 - resultSet.GrowthMindset.Total
                        });
                      }}>
                        <SectionProgress
                          name="Growth Mindset"
                          value={
                            (15 - resultSet.GrowthMindset.Total /
                              ResultFeedback.GrowthMindset.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                      <Grid item xs="4" onClick={() => {
                        handleClickOpen({
                          name: "Imposter Syndrome",
                          path: "ImposterSyndrome.Total",
                          res: resultSet.ImposterSyndrome.Total
                        });
                      }}>
                        <SectionProgress
                          name="Imposter Syndrome"
                          value={
                            (resultSet.ImposterSyndrome.Total /
                              ResultFeedback.ImposterSyndrome.Total.scale.max) *
                            100
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs="6" style={{ maxHeight: "250px" }}>
                <Typography
                  variant="body1"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  align="center"
                  onClick={() => {
                    handleClickOpen({
                      name: "Entrepreneurial Passion",
                      path: "EntrepreneurialPassion.Total",
                      res: resultSet.EntrepreneurialPassion.Total
                    });
                  }}
                >
                  Entrepreneurial Passion
                </Typography>
                <Radar
                  data={EPdata}
                  options={EPOptions}
                  style={{ margin: "auto", height: "65%" }}
                ></Radar>
              </Grid>

              <Grid item xs="6">
                <Typography
                  variant="body1"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  align="center"
                  onClick={() => {
                    handleClickOpen({
                      name: "Entrepreneurial Self Efficacy",
                      path: "EntrepreneurialSelfEfficacy.Total",
                      res: resultSet.EntrepreneurialSelfEfficacy.Total
                    });
                  }}
                >
                  Entrepreneurial Self Efficacy
                </Typography>
                <Bar options={ESEOptions} data={ESEData} />
              </Grid>

              <Grid item xs="6">
                <Typography
                  variant="body1"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  align="center"
                  onClick={() => {
                    handleClickOpen({
                      name: "Fear of Failure",
                      path: "FearOfFailure.Total",
                      res: resultSet.FearOfFailure.Total
                    });
                  }}
                >
                  Fear of Failure
                </Typography>
                <Bar options={FOFOptions} data={FOFData} />
              </Grid>

              <Grid item xs="6">
                <Grid container spacing={0}>
                  <Grid item xs="12">
                    <Typography
                      variant="body1"
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      align="center"
                      onClick={() => {
                        handleClickOpen({
                          name: "Individual Entrepreneurial Orientation",
                          path: "IndividualEntrepreneurialOrientation.RiskTaking",
                          res: resultSet.IndividualEntrepreneurialOrientation.RiskTaking
                        });
                      }}
                    >
                      Individual Entrepreneurial Orientation
                    </Typography>
                    <div style={{ maxHeight: "250px" }}>
                      <Radar
                        data={IEOData}
                        options={IEOOptions}
                        style={{ margin: "auto" }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs="12">
                    <Typography
                      variant="body1"
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      align="center"
                      onClick={() => {
                        handleClickOpen({
                          name: "Motivation at Work",
                          path: "MotivationAtWork.Total",
                          res: resultSet.MotivationAtWork.Total
                        });
                      }}
                    >
                      Motivation at Work
                    </Typography>
                    <Bar options={MaWoptions} data={MaWdata} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs="6">
                <Typography
                  variant="body1"
                  style={{ paddingTop: "60px", paddingBottom: "0px" }}
                  align="center"
                  onClick={() => {
                    handleClickOpen({
                      name: "The Big Five",
                      path: "TheBigFive.Total",
                      res: resultSet.TheBigFive.Total
                    });
                  }}
                >
                  The Big Five
                </Typography>
                <Radar data={TBFdata} options={TBFOptions}></Radar>
              </Grid>

            </Grid>
          </div>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {type.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {getResponse(
                `${type.path}`,
                type.res
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="contained">
              I KNOW
            </Button>
          </DialogActions>
        </Dialog>
      </div >
      <Footer />
    </div >
  );
}

export default Results;