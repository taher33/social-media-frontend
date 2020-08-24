import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";

export default function Form(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(props.onSubmit)}>
      <TextField
        name="email"
        required
        id="standard-required"
        label="email"
        inputRef={register}
        variant="outlined"
        helperText={props.errors.message}
        error={props.errors.error}
      />
      <TextField
        name="password"
        required
        type="password"
        inputRef={register}
        id="standard-required"
        label="password"
        helperText={props.errors.message}
        error={props.errors.error}
        variant="outlined"
      />

      <div className={styles.action_form}>
        <Button type="submit" variant="contained" color="primary">
          login
        </Button>
        <div className={styles.forget_pass}>
          <Link onClick={props.handlePass} component="button" variant="body2">
            <Typography>forgot your password ?</Typography>
          </Link>
        </div>
      </div>
    </form>
  );
}
