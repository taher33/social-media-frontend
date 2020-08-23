import React from "react";
// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import LandingC from "./components/landing page/landingC";
import Home from "./components/home/home";
import Comment from "./components/comment/comment";
import { Grid } from "@material-ui/core";
import LeftNav from "./components/left-side-bar/left-nav";
import Profile from "./components/profile/Profile";
import NavBar from "./components/nav-bar/nav-bar";
import Post from "./components/singlePost/post";
import { connect } from "react-redux";

function App(props) {
  let signup = !props.logedIn ? <Redirect to="/signUp" /> : null;
  return (
    <div className="App">
      <Router>
        {signup}
        {props.logedIn ? <NavBar /> : null}
        <Switch>
          <Route component={LandingC} path="/signUp" />
          <Grid container className="content">
            <Grid item sm={3}>
              <LeftNav />
            </Grid>
            <Grid item xs={12} sm={6} container justify="center">
              <Route exact component={Home} path="/" />
              <Route component={Profile} path="/profile" />
              <Route component={Comment} path="/comment/:id" />
              <Route component={Post} path="/singlePost/:id" />
            </Grid>
            <Grid item xs={false} sm={3} />
          </Grid>
        </Switch>
      </Router>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    logedIn: state.auth.logedIn,
  };
};

export default connect(mapStatetoProps)(App);
