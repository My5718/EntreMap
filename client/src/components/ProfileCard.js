import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { format } from "date-fns";
import GoogleIcon from "../resources/google-icon.svg";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  container: { borderRadius: 0 },
  icon: { padding: 0, color: "black" },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    padding: "2px",
    border: `1px solid grey`,
  },
}))(Avatar);

function createData(date, ID) {
  return { date, ID };
}

export default function ProfileCard(props) {
  const [selectedSurvey, setSelectedSurvey] = useState(false);

  const rows = props.completedSurveys.map((survey) => {
    return createData(format(new Date(survey.date), "dd/MM/yyyy"), survey.ID);
  });

  let getSurveyResults = (ID) => {
    console.log(ID);
    let getSurvey = "/api/results?SurveyResults=" + ID;
    fetch(getSurvey, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedSurvey(data);
      });
  };

  let ProviderIcon = () => {
    if (props.provider === "Google") {
      return (
        <SmallAvatar src={GoogleIcon} style={{ backgroundColor: "white" }} />
      );
    } else if (props.provider === "LinkedIn") {
      return (
        <SmallAvatar
          src={LinkedInIcon}
          style={{ backgroundColor: "#2867B2" }}
        />
      );
    } else if (props.provider === "Twitter") {
      return (
        <SmallAvatar src={TwitterIcon} style={{ backgroundColor: "#1DA1F2" }} />
      );
    } else if (props.provider === "Facebook") {
      return (
        <SmallAvatar
          src={FacebookIcon}
          style={{ backgroundColor: "#4267B2" }}
        />
      );
    }
  };
  const classes = useStyles();

  if (selectedSurvey === false) {
    return (
      <Card
        className={classes.root}
        style={{
          margin: "auto",
          maxWidth: "500px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <CardContent style={{ textAlign: "center" }}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={ProviderIcon()}
          >
            <Avatar
              alt="Patrick"
              src={props.picture}
              className={classes.large}
            />
          </Badge>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            style={{ marginTop: 15 }}
          >
            {props.fullName}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            Entremap User since:{" "}
            {format(Date.parse(props.accountCreated), "dd/MM/yyyy")}
          </Typography>
          <Button
            size="large"
            color="primary"
            justify="center"
            variant="contained"
            style={{ marginTop: 40 }}
            component={Link}
            to={"/surveylanding"}
          >
            Start Survey
          </Button>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="p"
            align="center"
            style={{ marginTop: 15 }}
          >
            {props.lastSurveyCompleted == null &&
              "You have not completed a survey."}
            {props.lastSurveyCompleted != null &&
              "Survey last completed " +
                formatDistance(
                  new Date(props.lastSurveyCompleted),
                  new Date(),
                  {
                    addSuffix: true,
                  }
                )}
          </Typography>
        </CardContent>

        <CardActions></CardActions>
        <TableContainer
          component={Paper}
          className={classes.container}
          style={{ height: "250px" }}
        >
          <Table
            className={classes.table}
            aria-label="a dense table"
            stickyHeader
            style={{ tableLayout: "auto" }}
            fixedHeader={false}
          >
            <TableHead>
              <TableRow>
                <TableCell width="70%">Date</TableCell>
                <TableCell width="30%" align="center">
                  Results
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => getSurveyResults(row.ID)}>
                      <span role="img" aria-label="Results">
                        📄
                      </span>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  } else {
    return (
      <Redirect
        push
        to={{ pathname: "/results", state: selectedSurvey }}
      ></Redirect>
    );
  }
}
