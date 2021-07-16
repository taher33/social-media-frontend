import React, { useEffect, useState } from "react";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";
import Cards from "../home/Cards";
import { getProfilePosts } from "../../store/actions";
import { connect } from "react-redux";
import PostForm from "../home/postingForm";
import { useLocation, useParams } from "react-router-dom";
import {
  
  fetchOneUser,
  fetchOneUser_posts,
} from "../../api/fetchData";
import PageProfile from "./pageProfile";
import ProfileUser from "./ProfileUser";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Profile(props) {
  const query = useQuery();
  const id = query.get("id");
  const { type } = useParams();

  // need to work on it **

  return (
    <>
      {type === "user" ? (
        <ProfileUser profileId={id} />
      ) : (
        <PageProfile pageId={id} />
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
    
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Profile);
