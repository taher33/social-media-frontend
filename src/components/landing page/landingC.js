import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import { connect } from "react-redux";
import { checkLog, logout_server } from "../../store/actions";
import { useHistory } from "react-router-dom";
import styles from "./landing.module.css";
import { Paper } from "@material-ui/core";

function LandingC(props) {
  const history = useHistory();

  const handleLogINBtn = () => {
    if (!props.logedIn) {
      history.push("/logIn");
    } else props.onLogOut();
  };

  return (
    <Paper className={styles.wrapper} elevation={12}>
      <div className={styles.text}>
        <Typography variant="h5">Create your acount</Typography>
      </div>
      <Form handleLogin={handleLogINBtn} />
    </Paper>
  );
}

const mapStatetoProps = (state) => {
  return {
    logedIn: state.auth.logedIn,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onLogIn: () => dispatch(checkLog()),
    onLogOut: () => dispatch(logout_server()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingC);
