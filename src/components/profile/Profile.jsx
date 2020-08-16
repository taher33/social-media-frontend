import React from "react";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";

export default function Profile() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <img className={classes.coverImg} src={require("../home/img/hey.jpg")} />
      <img
        className={classes.profileImg}
        src={require("../home/img/helo.jpg")}
      />
      <div className={classes.namediv}>
        <Typography variant="h6" className={classes.name}>
          name here
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.followBtn}
        >
          follow
        </Button>
      </div>
      <Typography>
        <div className={classes.aboutDiv}>
          about me do stuff here about me do stuff here about me do stuff here
          about me do stuff here about me do stuff here about me do stuff here
          about me do stuff here
        </div>
        <div className={classes.statdiv}>
          <Link href="#">50 following</Link>

          <Link href="#">23 followers</Link>
        </div>
      </Typography>
    </Paper>
  );
}
