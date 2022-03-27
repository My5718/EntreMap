import React from "react";
import { Box } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { getResponse } from "../utils/getResponse";
import Grid from "@material-ui/core/Grid";
import Progress from "@material-ui/core/LinearProgress";
import { format } from "date-fns";
import ResultFeedback from "../components/resultFeedback.json";
import { Bar, Doughnut, PolarArea } from "react-chartjs-2";
import Footer from "../components/Footer";

function Results(props) {
  let resultSet = props.location.state.resultSet;

  function SectionProgress(props) {
    return (
      <div>
        <Typography
          variant="h5"
          style={{
            paddingTop: "30px",
            paddingBottom: "15px",
            textAlign: "center",
          }}
        >
          {props.name}
        </Typography>
        <Progress
          variant="determinate"
          value={props.value}
          style={{ height: "10px", maxWidth: "300px", margin: "auto" }}
        />
      </div>
    );
  }

  let MaWdata = {
    labels: ["Intrinsic", "Identified", "Introjected", "External Motivation"],
    datasets: [
      {
        label: "",
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let MaWoptions = {
    plugins: {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
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
        label: "My First Dataset",
        data: [
          resultSet.EntrepreneurialPassion.Inventing,
          resultSet.EntrepreneurialPassion.Founding,
          resultSet.EntrepreneurialPassion.Developing,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  let IEOData = {
    labels: ["Risk Taking", "Innovativeness", "Proactivity"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          resultSet.IndividualEntrepreneurialOrientation.RiskTaking,
          resultSet.IndividualEntrepreneurialOrientation.Innovativeness,
          resultSet.IndividualEntrepreneurialOrientation.Proactivity,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
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
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
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
        label: "",
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let FOFOptions = {
    plugins: {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
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
        label: "",
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
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingPeople.scale
              .max) *
            100,
          (resultSet.EntrepreneurialSelfEfficacy.ImplementingFinancial /
            ResultFeedback.EntrepreneurialSelfEfficacy.ImplementingFinancial
              .scale.max) *
            100,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let ESEOptions = {
    plugins: {
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
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
          style={{
            margin: "auto",
            maxWidth: "1000px",

            backgroundColor: "white",
            padding: "3vw",
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Entremap Mindset Report
          </Typography>
          <Typography variant="h5" gutterBottom>
            {resultSet.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {format(new Date(resultSet.date), "dd/MM/yyyy")}
          </Typography>
          <Divider></Divider>
          <Typography>Pending summary.</Typography>
          <div>
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              Motivation at Work
            </Typography>
            <Bar options={MaWoptions} data={MaWdata} />
            <Grid container spacing={5}>
              <Grid item xs="12" sm="12" style={{ paddingTop: "30px" }}>
                <Typography gutterBottom>
                  {getResponse(
                    "MotivationAtWork.Intrinsic",
                    resultSet.MotivationAtWork.Intrinsic
                  )}
                </Typography>
                <Typography gutterBottom>
                  {getResponse(
                    "MotivationAtWork.Identified",
                    resultSet.MotivationAtWork.Identified
                  )}
                </Typography>
                <Typography gutterBottom>
                  {getResponse(
                    "MotivationAtWork.Introjected",
                    resultSet.MotivationAtWork.Introjected
                  )}
                </Typography>

                <Typography gutterBottom>
                  {getResponse(
                    "MotivationAtWork.ExternalMotivation",
                    resultSet.MotivationAtWork.ExternalMotivation
                  )}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <Typography
            variant="h5"
            style={{ paddingTop: "30px", paddingBottom: "15px" }}
          >
            Entrepreneurial Passion
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs="12" sm="8">
              <Typography gutterBottom style={{ paddingTop: "30px" }}>
                {getResponse(
                  "EntrepreneurialPassion.Total",
                  resultSet.EntrepreneurialPassion.Total
                )}
              </Typography>
            </Grid>

            <Grid item xs="12" sm="4">
              <Doughnut
                data={EPdata}
                options={{ maintainAspectRatio: true, responsive: true }}
                style={{ margin: "auto" }}
              />
            </Grid>
          </Grid>
          <div>
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              Passion Scale
            </Typography>

            <Grid container spacing={5}>
              <Grid item xs="12" sm="6">
                <Typography
                  variant="h6"
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
                  style={{ height: "10px", maxWidth: "300px", margin: "auto" }}
                />
              </Grid>
              <Grid item xs="12" sm="6">
                <Typography variant="h6" style={{ textAlign: "center" }}>
                  Obsessive Passion
                </Typography>
                <Progress
                  variant="determinate"
                  value={
                    (resultSet.PassionScale.ObsessivePassion /
                      ResultFeedback.PassionScale.ObsessivePassion.scale.max) *
                    100
                  }
                  style={{ height: "10px", maxWidth: "300px", margin: "auto" }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            {" "}
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              Individual Entrepreneurial Orientation
            </Typography>
            <div style={{ maxWidth: "1000px", maxHeight: "1000px" }}>
              <Doughnut
                data={IEOData}
                height={400}
                options={{ maintainAspectRatio: false, responsive: true }}
                style={{ margin: "auto" }}
              />
            </div>
            <Grid container spacing={5} style={{ paddingTop: "30px" }}>
              <Grid item xs="12" sm="12">
                <Typography gutterBottom>
                  {getResponse(
                    "IndividualEntrepreneurialOrientation.RiskTaking",
                    resultSet.IndividualEntrepreneurialOrientation.RiskTaking
                  )}
                </Typography>
                <Typography gutterBottom>
                  {getResponse(
                    "IndividualEntrepreneurialOrientation.Innovativeness",
                    resultSet.IndividualEntrepreneurialOrientation
                      .Innovativeness
                  )}
                </Typography>
                <Typography gutterBottom>
                  {getResponse(
                    "IndividualEntrepreneurialOrientation.Proactivity",
                    resultSet.IndividualEntrepreneurialOrientation.Proactivity
                  )}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              Entrepreneurial Self Efficacy
            </Typography>
            <Bar options={ESEOptions} data={ESEData} />
            <Typography
              gutterBottom
              style={{ paddingTop: "30px", paddingBottom: "30px" }}
            >
              {getResponse(
                "EntrepreneurialSelfEfficacy.Total",
                resultSet.EntrepreneurialSelfEfficacy.Total
              )}
            </Typography>
          </div>
          <Grid container spacing={5}>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Cognitive Flexibility"
                value={
                  (resultSet.CognitiveFlexibility.Total /
                    ResultFeedback.CognitiveFlexibility.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography gutterBottom style={{ paddingTop: "30px" }}>
                {getResponse(
                  "CognitiveFlexibility.Total",
                  resultSet.CognitiveFlexibility.Total
                )}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Empathy"
                value={
                  (resultSet.Empathy.Total /
                    ResultFeedback.Empathy.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography gutterBottom style={{ paddingTop: "30px" }}>
                {getResponse("Empathy.Total", resultSet.Empathy.Total)}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Need to Achieve"
                value={
                  (resultSet.NeedToAchieve.Total /
                    ResultFeedback.NeedToAchieve.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography gutterBottom style={{ paddingTop: "30px" }}>
                {getResponse(
                  "NeedToAchieve.Total",
                  resultSet.NeedToAchieve.Total
                )}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Grit"
                value={
                  (resultSet.Grit.Total / ResultFeedback.Grit.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse("Grit.Total", resultSet.Grit.Total)}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Growth Orientation"
                value={
                  (resultSet.GrowthOrientation.Total /
                    ResultFeedback.GrowthOrientation.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse(
                  "GrowthOrientation.Total",
                  resultSet.GrowthOrientation.Total
                )}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Tolerance for Ambiguity"
                value={
                  (resultSet.ToleranceForAmbiguity.Total /
                    ResultFeedback.ToleranceForAmbiguity.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse(
                  "ToleranceForAmbiguity.Total",
                  resultSet.ToleranceForAmbiguity.Total
                )}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Resilience"
                value={
                  (resultSet.Resilience.Total /
                    ResultFeedback.Resilience.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse("Resilience.Total", resultSet.Resilience.Total)}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Growth Mindset"
                value={
                  (resultSet.GrowthMindset.Total /
                    ResultFeedback.GrowthMindset.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse(
                  "GrowthMindset.Total",
                  resultSet.GrowthMindset.Total
                )}
              </Typography>
            </Grid>
            <Grid item xs="12" sm="4">
              <SectionProgress
                name="Imposter Syndrome"
                value={
                  (resultSet.ImposterSyndrome.Total /
                    ResultFeedback.ImposterSyndrome.Total.scale.max) *
                  100
                }
              />
            </Grid>
            <Grid item xs="12" sm="8">
              <Typography style={{ paddingTop: "30px" }}>
                {getResponse(
                  "GrowthMindset.Total",
                  resultSet.GrowthMindset.Total
                )}
              </Typography>
            </Grid>
          </Grid>

          <div>
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              Fear of Failure
            </Typography>
            <Bar options={FOFOptions} data={FOFData} />
          </div>

          <div>
            <Typography
              variant="h5"
              style={{ paddingTop: "30px", paddingBottom: "15px" }}
            >
              The Big Five
            </Typography>
            <PolarArea data={TBFdata} options={TBFOptions}></PolarArea>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
