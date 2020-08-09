import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingC from "./components/landing page/landingC";
import UsersC from "./components/users/usersC";
import Home from "./components/home/home";
import ProfileC from "./components/profile/profile-c";
import NavBar from "./components/nav-bar/nav-bar";
import { Grid } from "@material-ui/core";
import LeftNav from "./components/left-side-bar/left-nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container className="content">
        <Grid item xs={0} sm={2}>
          <LeftNav />
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* <LandingC /> */}
          <Home />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </div>
  );
}

export default App;
