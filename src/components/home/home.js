import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api/fetchData";
import { createPost } from "../../api/postData";
import PostForm from "./postingForm";
import Cards from "./Cards";
import { useStyles } from "./home-css-js";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const classes = useStyles();
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(true);

  const handleSubmit = async (formData) => {
    const { data } = await createPost(formData);

    const newPosts = [data.post, ...posts];

    setposts(newPosts);
  };

  const getPostData = () => {
    fetchPosts()
      .then((res) => {
        setposts(res.posts);
      })
      .finally(() => setloading(false));
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.postingForm}>
          <PostForm submitForm={handleSubmit} />
        </Grid>
        <Grid item className={classes.root}>
          {posts.length === 0 && loading ? (
            <h1>loading posts</h1>
          ) : (
            <InfiniteScroll
              dataLength={posts.length}
              // next={getPostData()}
              // hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {posts.map((el) => {
                return <Cards client={el.user._id} data={el} />;
              })}
            </InfiniteScroll>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
