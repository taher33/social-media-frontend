import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import LandingC from "./components/landing page/landingC";
import Home from "./components/home/home";
import Comment from "./components/comment/comment";
import { Grid } from "@material-ui/core";
import LeftNav from "./components/left-side-bar/left-nav";
import Profile from "./components/profile/Profile";
import NavBar from "./components/nav-bar/nav-bar";
import Post from "./components/singlePost/post";
import { connect } from "react-redux";
import Login from "./components/login/login";
import { checkLog } from "./store/actions";
import Right_bar from "./components/right-side-bar/Right_bar";

function App(props) {
  props.checkLogState();
  const history = useHistory();

  if (props.logedIn) {
    history.push("/");
  } else {
    history.push("/signUp");
  }
  return (
    <div className="App">
      {props.logedIn ? <NavBar /> : null}
      <Switch>
        <Route component={LandingC} path="/signUp" />
        <Route component={Login} path="/logIn" />
        <Grid container spacing={1} justifyContent="center">
          <Grid item sm={3}>
            <LeftNav />
          </Grid>
          <Grid item xs={12} sm={9} md={5} container>
            <Route exact component={Home} path="/" />
            <Route component={Profile} path="/profile/:type" />
            <Route component={Comment} path="/comment/:id" />
            <Route component={Post} path="/singlePost/:id" />
          </Grid>
          <Grid item sm={3}>
            {props.logedIn ? <Right_bar /> : null}
          </Grid>
        </Grid>
      </Switch>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    logedIn: state.auth.logedIn,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    checkLogState: () => dispatch(checkLog()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
