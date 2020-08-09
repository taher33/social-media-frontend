import React from "react";
import Tabs from "@material-ui/core/Tabs";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "./left-cssInJs";
import MessageIcon from "@material-ui/icons/Message";

export default function LeftNav() {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<HomeIcon />} aria-label="home" label="Home" />
        <Tab icon={<PhoneIcon />} aria-label="phone" label="phone" />
        <Tab icon={<MessageIcon />} aria-label="message" label="message" />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" label="fav" />
        <Tab icon={<PersonPinIcon />} aria-label="person" label="person" />
      </Tabs>
    </div>
  );
}
