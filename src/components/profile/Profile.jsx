import React, { useEffect, useState } from "react";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";
import Cards from "../home/Cards";
import { getProfilePosts, getProfilePosts_pages } from "../../store/actions";
import { connect } from "react-redux";
import PostForm from "../home/postingForm";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchOnePage,
  fetchOneUser,
  fetchOneUser_posts,
} from "../../api/fetchData";
import { register_follower_db } from "../../api/patchData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Profile(props) {
  const query = useQuery();
  const id = query.get("id");
  const classes = useStyles();
  const { type } = useParams();

  const [data, setData] = useState({});

  const [posts, setPosts] = useState([]);

  const getProfileData_user = async () => {
    const res = await fetchOneUser(id);
    setData(res.user);
  };

  const getProfilePosts_user = async () => {
    const res = await fetchOneUser_posts(id);
    console.log(res);
  };

  const getPageData = async () => {
    const res = await fetchOnePage(id);
    setData(res.page);
    setPosts(res.pagePosts);
  };

  useEffect(() => {
    if (type === "user") {
      getProfileData_user();
      getProfilePosts_user();
    } else {
      getPageData();
    }
    return () => {
      console.log("hey");
    };
  }, []);

  // need to work on it **
  const handleFollow = async () => {
    await register_follower_db(data.email);
  };

  const handleSubmit = data => {};

  return (
    <>
      {Object.keys(data).length === 0 || data === undefined ? null : (
        <Paper className={classes.root}>
          <img
            className={classes.coverImg}
            src={`http://localhost:5000/users/${data.cover}`}
          />
          {type === "user" ? (
            <img
              className={classes.profileImg}
              src={`http://localhost:5000/users/${data.profileImg}`}
            />
          ) : null}
          <div className={classes.namediv}>
            <Typography variant="h6" className={classes.name}>
              {data.name}
            </Typography>
            {id === "me" || id === props.user._id ? (
              <Button
                variant="contained"
                color="primary"
                className={classes.followBtn}
              >
                edit profile
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.followBtn}
                onClick={handleFollow}
              >
                follow
              </Button>
            )}
          </div>
          {/* <div className={classes.aboutDiv}>
              about me do stuff here about me do stuff here about me do stuff
              here about me do stuff here about me do stuff here about me do
              stuff here about me do stuff here
            </div> */}
          <div className={classes.statdiv}>
            {type === "user" ? (
              <Link href="#">{data.People_I_follow.length} following</Link>
            ) : null}

            <Link href="#">{data.People_that_follow_me.length} followers</Link>
          </div>
        </Paper>
      )}
      {type === "user" ? null : <PostForm onSubmit={handleSubmit} />}

      {posts.length !== 0 ? (
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
    user: state.auth.user,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    getPosts: id => dispatch(getProfilePosts(id)),
    getPosts_pages: id => dispatch(getProfilePosts_pages(id)),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
