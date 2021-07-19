import React from "react";
import { NavLink } from "react-router-dom";
// import Create_Page from "./Create_page";
//mui imports
import { useStyles } from "./left-cssInJs";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { useSelector } from "react-redux";

export default function LeftNav() {
  const classes = useStyles();
  const { _id } = useSelector((state) => state.auth.user);

  return (
    <div className={classes.sideBar}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        textColor="primary"
        value={false}
      >
        <NavLink to="/" className={classes.NavLink}>
          <Tab icon={<HomeIcon />} aria-label="home" label="Home" />
        </NavLink>
        <NavLink to={"/profile/" + _id} className={classes.NavLink}>
          <Tab icon={<PersonPinIcon />} aria-label="person" label="person" />
        </NavLink>
        <NavLink to="#" className={classes.NavLink}>
          <Tab icon={<MessageIcon />} aria-label="message" label="message" />
        </NavLink>
        <NavLink to="#" className={classes.NavLink}>
          <Tab icon={<FavoriteIcon />} aria-label="favorite" label="fav" />
        </NavLink>
      </Tabs>
    </div>
  );
}
