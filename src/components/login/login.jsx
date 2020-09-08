import React, { useState } from "react";
import Form from "./loginForm";
import styles from "./login.module.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import { login_to_api } from "../../api/postData";
import { useHistory } from "react-router-dom";
import { LOGIN, LOGOUT, login, logout } from "../../store/actions";
import { connect } from "react-redux";

function Login(props) {
  const handleForgotPass = () => {
    console.log("forgot password");
  };
  const history = useHistory();
  const [err, seterr] = useState({
    error: false,
    message: "",
  });
  //this func sends a request to the api
  const handleApi = async data => {
    console.log("before try");
    try {
      //wating for the response of the api
      const res = await login_to_api(data);
      console.log(res);
      console.log(document.cookie);
      //login with redux
      props.onLogIn();
      //go to the home page
      history.push("/");
    } catch (err) {
      //if user info did not exist on the server then we set errors to the form
      //errors using react-hook-form
      console.log(err);
      seterr({
        error: true,
        message: "wrong password or email",
      });
    }
  };
  // handles submited data from the form
  //we get the data with react-hook-form
  const handleSubmit = data => {
    handleApi(data);
  };
  return (
    <div>
      <Grid container spacing="2" justify="center" alignItems="stretch">
        <Grid item xs={12} sm={6} lg={4}>
          <Paper className={styles.wrapper}>
            <div className={styles.text}>
              <Typography variant="h5">Create your acount </Typography>
            </div>
            <Form
              errors={err}
              onSubmit={handleSubmit}
              handlePass={handleForgotPass}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
//putting the redux state to props
const mapStatetoProps = state => {
  return {
    logedIn: state.auth.logedIn,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    onLogIn: () => dispatch(login()),
    onLogOut: () => dispatch(logout()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
