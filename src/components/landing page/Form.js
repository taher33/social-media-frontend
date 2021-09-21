import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./landing.module.css";
import { creatUser } from "../../api/postData";
import { Link, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { checkLog, logout_server } from "../../store/actions";

function Form(props) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [err, seterr] = useState({
    error: false,
    message: "",
  });
  const handleApi = async (user) => {
    const res = await creatUser(user);
    console.log(res);
    if (res.status === "success") {
      props.onLogIn();
      history.push("/");
    }
  };
  const onSubmit = (data) => {
    if (data.password !== data.passwordConf) {
      seterr({ ...err, error: true, message: "wrong password" });
      return;
    } else {
      handleApi(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="email"
        required
        type="email"
        id="standard-required"
        label="email"
        inputRef={register}
        variant="outlined"
      />
      <TextField
        name="name"
        required
        inputRef={register}
        id="standard-required"
        label="full name"
        variant="outlined"
      />
      <TextField
        name="password"
        required
        inputRef={register}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <TextField
        name="passwordConf"
        required
        id="standard-password-input"
        label="confirm password"
        type="password"
        inputRef={register}
        autoComplete="current-password"
        error={err.error}
        helperText={err.message}
        variant="outlined"
      />
      <div className={styles.action_form}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <br />
        <Link onClick={props.handleLogin} component="button" variant="body2">
          <Typography>login</Typography>
        </Link>
      </div>
    </form>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Form);
