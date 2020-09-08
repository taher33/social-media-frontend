import React from "react";
import Tabs from "@material-ui/core/Tabs";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./left-cssInJs";
import MessageIcon from "@material-ui/icons/Message";
import { Link } from "react-router-dom";
import Create_page from "./Create_page";

export default function LeftNav() {
  const classes = useStyles();
  const id = 23;
  return (
    <div className={classes.sideBar}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Link to="/">
          <Tab icon={<HomeIcon />} aria-label="home" label="Home" />
        </Link>
        <Link to="/profile/user?id=me">
          <Tab icon={<PersonPinIcon />} aria-label="person" label="person" />
        </Link>
        <Link to={`/comment/${id}`}>
          <Tab icon={<PhoneIcon />} aria-label="phone" label="phone" />
        </Link>
        <Tab icon={<MessageIcon />} aria-label="message" label="message" />
        <Create_page />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" label="fav" />
      </Tabs>
    </div>
  );
}
