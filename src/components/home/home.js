import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PostForm from "./postingForm";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item style={{ width: "100%" }}>
          <PostForm />
        </Grid>
        <Grid item>
          <Cards />
          <Cards />
        </Grid>
      </Grid>
    </>
  );
}
