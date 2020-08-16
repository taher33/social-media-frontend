import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PostForm from "./postingForm";
import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item style={{ width: "100%" }}>
          <PostForm />
        </Grid>
        <Grid item>
          <Cards />
        </Grid>
      </Grid>
    </>
  );
}
