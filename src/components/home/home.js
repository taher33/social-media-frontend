import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PostForm from "./postingForm";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { fetchPosts } from "../../api/fetchData";

export default function Home(props) {
  const getPosts = async () => {
    const res = await fetchPosts();
    console.log(res);
  };
  getPosts();
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
