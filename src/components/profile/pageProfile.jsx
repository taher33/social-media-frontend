import React, { useEffect, useState } from "react";
import { useStyles } from "./profile-css";
import { Paper, Button, Link, Typography } from "@material-ui/core";
import Cards from "../home/Cards";
import { connect } from "react-redux";
import PostForm from "../home/postingForm";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchOnePage,
  fetchOneUser,
  fetchOneUser_posts,
} from "../../api/fetchData";

function PageProfile({ pageId }) {
  const classes = useStyles();

  const [data, setData] = useState({});

  const [posts, setPosts] = useState([]);

  const getPageData = async () => {
    const res = await fetchOnePage(pageId);
    setData(res.page);
    setPosts(res.pagePosts);
  };

  useEffect(() => {
    getPageData();
  }, [pageId]);
  console.log(posts, data, pageId);

  return (
    <div>
      {Object.keys(data).length === 0 || data === undefined ? null : (
        <Paper className={classes.root}>
          <img
            className={classes.coverImg}
            src={`https://social-app-taher.herokuapp.com/users/${data.coverImg}`}
          />

          <div className={classes.namediv}>
            <Typography variant="h6" className={classes.name}>
              {data.name}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              className={classes.followBtn}
            >
              follow
            </Button>
          </div>
          <div className={classes.statdiv}>
            <Link href="#">{data.People_that_follow_me.length} followers</Link>
          </div>
        </Paper>
      )}
      <PostForm />

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

export default PageProfile;
