import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Button, InputBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./navbarCssJs";

export default function NavBarV({ handleLog, isLoged }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Facebook
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button
            className={classes.logBtn}
            onClick={handleLog}
            color="inherit"
          >
            {isLoged ? "logout" : " Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
