import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./comment-css-js";
import Avatar from "@material-ui/core/Avatar";
import { CardHeader } from "@material-ui/core";

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        classes={classes.comHead}
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={<Typography variant="h5">user name</Typography>}
      />
      <CardContent>
        <Typography align="left" variant="body1" component="h5">
          comment here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">edit</Button>
      </CardActions>
    </Card>
  );
}
