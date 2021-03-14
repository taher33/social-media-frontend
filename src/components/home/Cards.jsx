import React, { useEffect, useState } from "react";
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
import { likePosts } from "../../api/patchData";

export default function Cards({ data, client }) {
  //material-ui css in js
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  //state of the like btn
  const [like, setLike] = useState(() => {
    return data.likes.includes(client);
  });
  //state of the likes number
  const [likeNum, setLikeNum] = useState(() => {
    return data.likes.length;
  });
  //this came with material-ui
  const handleClickSettings = event => {
    setAnchorEl(event.currentTarget);
  };
  //this came with material-ui
  const handleClose = () => {
    setAnchorEl(null);
  };
  //this func handles clicking on the title takes the user to the post with comments
  const handleClick = id => {
    history.push("/singlePost/" + id);
    console.log(id);
  };
  const onLike = async id => {
    await likePosts(id);
  };
  // this func handles the frontend part of the likeBtn
  const likeBtn = () => {
    //this func came from props
    onLike(data._id);
    setLike(state => {
      return !state;
    });
    setLikeNum(prevState => {
      if (like) {
        return prevState - 1;
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            src={`https://social-app-taher.herokuapp.com/post-imgs/${data.user.profileImg}`}
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
          image={`https://social-app-taher.herokuapp.com/post-imgs/${data.photo}`}
          title="an image"
        />
      )}
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {likeNum}
        <IconButton aria-label="add to favorites" onClick={likeBtn}>
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
