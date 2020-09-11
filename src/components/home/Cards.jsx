import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./home-css-js";
import { useHistory } from "react-router-dom";
import Comment_form from "../comment/comment-form";
import { Menu, MenuItem } from "@material-ui/core";

export default function Cards({ data, client }) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [like, setLike] = useState(false);
  const handleClickSettings = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = id => {
    // history.push("/singlePost/" + id);
    console.log(id);
  };
  // const isLiked = data.likes.includes(client) ? "action" : "disabled";

  // if (data === Object) return <h1>loading</h1>;
  // else
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={`http://localhost:5000/post-imgs/${data.user.profileImg}`}
            aria-label="recipe"
            className={classes.avatar}
          />
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClickSettings}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>edit</MenuItem>
              <MenuItem onClick={handleClose}>delete</MenuItem>
            </Menu>
          </>
        }
        title={
          <div onClick={() => handleClick(data._id)}>
            <Typography>{data.user.name}</Typography>
          </div>
        }
        // subheader="September 14, 2016"
      />
      {data.photo.length === 0 ? null : (
        <CardMedia
          className={classes.media}
          image={`http://localhost:5000/post-imgs/${data.photo}`}
          title="an image"
        />
      )}
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {data.likes.length}
        <IconButton
          aria-label="add to favorites"
          onClick={() =>
            setLike(state => {
              return !state;
            })
          }
        >
          <FavoriteIcon color={like ? "primary" : "disabled"} />
        </IconButton>
        <Comment_form postId={data._id} name={data.user.name} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
