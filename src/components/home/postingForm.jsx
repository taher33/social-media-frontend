import React from "react";
import {
  Tooltip,
  TextField,
  IconButton,
  Paper,
  Button,
} from "@material-ui/core";
import { useStyles } from "./home-css-js";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import { useForm } from "react-hook-form";

import { server_url } from "../../constants";
import { useSelector } from "react-redux";

export default function PostForm(props) {
  const state = useSelector((state) => state);
  console.log(state);
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <Paper variant="outlined" className={classes.paper}>
      <img
        src={server_url + state.auth.user.profileImg}
        className={classes.img}
      />
      <form
        onSubmit={handleSubmit(props.onSubmit)}
        className={classes.form}
        encType="multipart/form-data"
      >
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
          <Tooltip title="add an image">
            <IconButton component="label" className={classes.imgIcon}>
              <>
                <PermMediaIcon />

                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={register}
                  name="picture"
                />
              </>
            </IconButton>
          </Tooltip>
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
