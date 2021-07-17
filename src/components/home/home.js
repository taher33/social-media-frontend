import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api/fetchData";
import { createPost } from "../../api/postData";
import PostForm from "./postingForm";
import Cards from "./Cards";
import { useStyles } from "./home-css-js";

function Home() {
  const classes = useStyles();
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);

  const handleSubmit = async (data) => {
    const res = await createPost(data);
  };

  useEffect(() => {
    fetchPosts()
      .then((res) => {
        setposts(res.posts);
      })
      .finally(() => setloading(false));
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.postingForm}>
          <PostForm onSubmit={handleSubmit} />
        </Grid>
        <Grid item>
          {posts.length === 0 && loading ? (
            <h1>loading posts</h1>
          ) : (
            <>
              {posts.map((el) => {
                return <Cards client={el.user._id} data={el} />;
              })}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
