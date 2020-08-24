import React, { useState } from "react";
import Form from "./loginForm";
import styles from "./login.module.css";
import { Grid, Paper, Typography } from "@material-ui/core";
import { login_to_api } from "../../api/postData";
export default function Login() {
  const handleForgotPass = () => {
    console.log("forgot password");
  };
  const [err, seterr] = useState({
    error: false,
    message: "",
  });
  console.log(err);
  const handleApi = async data => {
    try {
      const result = await login_to_api(data);
      console.log(result);
    } catch (_) {
      seterr({
        error: true,
        message: "wrong password or email",
      });
    }
  };
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
