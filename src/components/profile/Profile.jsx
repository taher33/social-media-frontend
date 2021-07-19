import React from "react";

import { useParams } from "react-router-dom";

import ProfileUser from "./ProfileUser";

function Profile(props) {
  const { id } = useParams();

  // need to work on it **

  return <ProfileUser profileId={id} />;
}

export default Profile;
