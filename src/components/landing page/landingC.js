import React, { useState, useEffect } from "react";
import "./landing.component.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import { connect } from "react-redux";
import { LOGIN, LOGOUT } from "../../store/actions";
import { useHistory } from "react-router-dom";
import { useStyles } from "./landing-css";
import "./landing.component.css";
import { Paper } from "@material-ui/core";

function LandingC(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleLogINBtn = () => {
    if (!props.logedIn) props.onLogIn();
    else props.onLogOut();
    history.push("/");
  };

  return (
    <Grid container spacing="2" justify="center" alignItems="stretch">
      <Grid item xs={12} sm={6}>
        <Paper className="wrapper">
          <div className="text">
            <Typography variant="h5">Create your acount </Typography>
          </div>
          <Form handleLogin={handleLogINBtn} />
        </Paper>
      </Grid>
    </Grid>
  );
}

const mapStatetoProps = state => {
  return {
    logedIn: state.auth.logedIn,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    onLogIn: () => dispatch({ type: LOGIN }),
    onLogOut: () => dispatch({ type: LOGOUT }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingC);
