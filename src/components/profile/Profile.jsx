import React, { useEffect } from "react";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";
import Cards from "../home/Cards";
import { getProfilePosts, getProfilePosts_pages } from "../../store/actions";
import { connect } from "react-redux";
import PostForm from "../home/postingForm";
import { useLocation, useParams } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Profile(props) {
  const query = useQuery();
  const id = query.get("id");
  const classes = useStyles();
  const { type } = useParams();

  useEffect(() => {
    if (type === "user") {
      props.getPosts(id);
    } else {
      props.getPosts_pages(id);
    }
  }, [id]);

  const handleSubmit = data => {
    console.log(data);
    console.log(props);
    console.log(id);
  };
  console.log(props.data);
  return (
    <>
      {Object.keys(props.data).length === 0 ? null : (
        <Paper className={classes.root}>
          <img
            className={classes.coverImg}
            src={require("../home/img/hey.jpg")}
          />
          <img
            className={classes.profileImg}
            src={require("../home/img/helo.jpg")}
          />
          <div className={classes.namediv}>
            <Typography variant="h6" className={classes.name}>
              {props.data.name}
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
              about me do stuff here about me do stuff here about me do stuff
              here about me do stuff here about me do stuff here about me do
              stuff here about me do stuff here
            </div>
            <div className={classes.statdiv}>
              {type === "user" ? <Link href="#">50 following</Link> : null}

              <Link href="#">23 followers</Link>
            </div>
          </Typography>
        </Paper>
      )}
      {type === "user" ? null : <PostForm onSubmit={handleSubmit} />}

      {props.posts.length !== 0 ? (
        props.posts.map(el => {
          return <Cards key={el._id} data={el} />;
        })
      ) : (
        <h1>loading posts</h1>
      )}
    </>
  );
}
const mapStatetoProps = state => {
  return {
    posts: state.auth.profilePosts,
    data: state.auth.profileData,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    getPosts: id => dispatch(getProfilePosts(id)),
    getPosts_pages: id => dispatch(getProfilePosts_pages(id)),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
