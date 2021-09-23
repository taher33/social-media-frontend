import React, { useEffect, useState } from "react";
import Cards from "../home/Cards";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";
import { fetchOneUser, fetchOneUser_posts } from "../../api/fetchData";
import { register_follower_db } from "../../api/patchData";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { server_url } from "../../constants";
import { useHistory } from "react-router-dom";

function ProfileUser({ profileId }) {
  const classes = useStyles();
  const router = useHistory();
  const { _id } = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState({});
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(2);
  const [haseMore, sethaseMore] = useState(false);
  const [loading, setloading] = useState(true);
  let myProfile = false;

  const getProfileData_user = async () => {
    const res = await fetchOneUser(profileId);
    setUserData(res.user);
  };
  const getProfilePosts_user = async () => {
    try {
      const res = await fetchOneUser_posts(profileId);
      setposts(res.posts);
      sethaseMore(res.haseMore);
      setloading(false);
    } catch (error) {
      router.push("/");
    }
  };
  useEffect(() => {
    getProfilePosts_user();
    getProfileData_user();
  }, [profileId, router]);

  if (userData._id === _id) myProfile = true;

  const handleFollow = async () => {
    await register_follower_db(userData.email);
  };

  let postsJsx;
  if (loading && posts.length === 0) postsJsx = <h4>loading..</h4>;
  if (!loading && posts.length === 0) postsJsx = <h4>so empty</h4>;
  if (!loading && posts.length !== 0) {
    postsJsx = posts.map((el) => {
      return <Cards key={el._id} client={_id} data={el} />;
    });
  }

  if (loading || !userData.email) return <h3>loading...</h3>;

  return (
    <div>
      <Paper className={classes.root}>
        <img
          className={classes.coverImg}
          src={`${server_url}${userData.cover}`}
          alt="cover-img"
        />

        <img
          className={classes.profileImg}
          src={`${server_url}${userData.profileImg}`}
          alt="profile img"
        />
        <div className={classes.namediv}>
          <Typography variant="h6" className={classes.name}>
            {userData.name}
          </Typography>

          {!myProfile ? (
            <Button
              variant="text"
              color="primary"
              className={classes.followBtn}
              onClick={handleFollow}
            >
              follow
            </Button>
          ) : null}
        </div>

        <div className={classes.statdiv}>
          <span>{userData.People_I_follow.length} following</span>
          <span>{userData.People_that_follow_me.length} followers</span>
        </div>
      </Paper>

      <InfiniteScroll
        dataLength={posts.length}
        next={async () => {
          const result = await fetchOneUser_posts(profileId, page);
          const nextPosts = result.posts;
          posts.push(...nextPosts);
          if (result.haseMore) {
            setpage(page + 1);
          } else sethaseMore(false);
        }}
        hasMore={haseMore}
        loader={<h4>Loading...</h4>}
      >
        {postsJsx}
      </InfiniteScroll>
    </div>
  );
}

export default ProfileUser;
