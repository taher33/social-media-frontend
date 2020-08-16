import React from "react";
import { TextField, IconButton, Paper, Button } from "@material-ui/core";
import { useStyles } from "./home-css-js";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import { useForm } from "react-hook-form";

export default function PostForm() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  console.log(watch("post"));
  return (
    <Paper variant="outlined" className={classes.uperDiv}>
      <img src={require("./img/helo.jpg")} className={classes.img} />
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          name="post"
          inputRef={register}
          className={classes.textField}
          id="standard-textarea"
          placeholder="what's on yor mind"
          multiline
          size="medium"
        />
        <div className={classes.actionDiv}>
          <IconButton className={classes.imgIcon}>
            <PermMediaIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
}