import React, { useState } from "react";
import { likePosts } from "../../api/patchData";
import { server_url } from "../../constants";
import Comment_Form from "../comment/comment-form";
import { useStyles } from "./home-css-js";
//mui imports
import { Menu, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Cards({ data, client }) {
  //material-ui css in js
  const classes = useStyles();

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
  const handleClickSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //this func handles clicking on the title takes the user to the post with comments
  const handleClick = () => {
    // history.push("/singlePost/" + id);
  };
  const onLike = async (id) => {
    await likePosts(id);
  };
  // this func handles the frontend part of the likeBtn
  const likeBtn = () => {
    //this func came from props
    onLike(data._id);
    setLike((state) => {
      return !state;
    });
    setLikeNum((prevState) => {
      if (like) {
        return prevState - 1;
      } else {
        return prevState + 1;
      }
    });
  };

  return (
    <Card className={classes.root} key={data._id}>
      <CardHeader
        avatar={
          <Avatar
            // src={`${server_url}${data.user.profileImg}`}
            // aria-label="recipe"
            className={classes.avatar}
          >
            {data.user.name.split("")[0]}
          </Avatar>
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
          <div onClick={handleClick}>
            <Typography>{data.user.name}</Typography>
          </div>
        }
      />
      {data.photo.length === 0 ? null : (
        <CardMedia
          className={classes.media}
          image={`${server_url}${data.photo}`}
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
        <Comment_Form postId={data._id} name={data.user.name} />
      </CardActions>
    </Card>
  );
}
