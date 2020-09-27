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

function ProfileUser({ profileId }) {
  const classes = useStyles();
  const [data, setData] = useState({});

  const [posts, setPosts] = useState([]);

  const getProfileData_user = async () => {
    const res = await fetchOneUser(profileId);
    setData(res.user);
  };

  const getProfilePosts_user = async () => {
    const res = await fetchOneUser_posts(profileId);
    setPosts(res.posts);
  };

  useEffect(() => {
    getProfileData_user();
    getProfilePosts_user();
  }, [profileId]);

  const handleFollow = async () => {
    await register_follower_db(data.email);
  };
  console.log(posts, data, profileId);

  return (
    <div>
      {Object.keys(data).length === 0 || data === undefined ? null : (
        <Paper className={classes.root}>
          <img
            className={classes.coverImg}
            src={`http://localhost:5000/users/${data.cover}`}
          />

          <img
            className={classes.profileImg}
            src={`http://localhost:5000/users/${data.profileImg}`}
          />
          <div className={classes.namediv}>
            <Typography variant="h6" className={classes.name}>
              {data.name}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              className={classes.followBtn}
              onClick={handleFollow}
            >
              follow
            </Button>
          </div>

          <div className={classes.statdiv}>
            <Link href="#">{data.People_I_follow.length} following</Link>

            <Link href="#">{data.People_that_follow_me.length} followers</Link>
          </div>
        </Paper>
      )}

      {posts.length !== 0 ? (
        posts.map(el => {
          return <Cards key={el._id} data={el} />;
        })
      ) : (
        <h1>loading posts</h1>
      )}
    </div>
  );
}

export default ProfileUser;
