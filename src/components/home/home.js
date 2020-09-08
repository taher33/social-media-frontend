import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import PostForm from "./postingForm";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { fetchPosts } from "../../api/fetchData";
import { getPosts } from "../../store/actions";
import { connect } from "react-redux";
import { createPost } from "../../api/postData";

function Home(props) {
  const posts = props.posts;
  const [status, setStatus] = useState("");
  const handleSubmit = async data => {
    const res = await createPost(data);
    setStatus(res.data.status);
  };

  useEffect(() => {
    props.givePosts();
  }, [status]);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ width: "100%" }}
      >
        <Grid item style={{ width: "100%" }}>
          <PostForm onSubmit={handleSubmit} />
        </Grid>
        <Grid item style={{ width: "100%" }}>
          {posts.length !== 0 ? (
            posts.map(el => {
              return <Cards data={el} />;
            })
          ) : (
            <h1>loading posts</h1>
          )}
        </Grid>
      </Grid>
    </>
  );
}

// const mapStatetoProps = state => {
//   return {
//     logedIn: state.auth.logedIn,
//   };
// };
// const mapDispatchtoProps = dispatch => {
//   return {
//     onLogIn: () => dispatch({ type: LOGIN }),
//     onLogOut: () => dispatch({ type: LOGOUT }),
//   };
// };
const mapStatetoProps = state => {
  return {
    posts: state.auth.posts,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    givePosts: () => dispatch(getPosts()),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
