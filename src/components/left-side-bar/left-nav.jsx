import React from "react";
import Tabs from "@material-ui/core/Tabs";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./left-cssInJs";
import MessageIcon from "@material-ui/icons/Message";
import { NavLink } from "react-router-dom";
import Create_Page from "./Create_page";

export default function LeftNav() {
  const classes = useStyles();
  const id = 23;
  return (
    <Tabs
      orientation="vertical"
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon tabs example"
      value={null}
      className={classes.sideBar}
    >
      <NavLink to="/">
        <Tab icon={<HomeIcon />} aria-label="home" label="Home" />
      </NavLink>
      <NavLink to="/profile/user?id=me">
        <Tab icon={<PersonPinIcon />} aria-label="person" label="person" />
      </NavLink>
      <NavLink to={`/comment/${id}`}>
        <Tab icon={<PhoneIcon />} aria-label="phone" label="phone" />
      </NavLink>
      <Tab icon={<MessageIcon />} aria-label="message" label="message" />
      <Create_Page />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" label="fav" />
    </Tabs>
  );
}
