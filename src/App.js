import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingC from "./components/landing page/landingC";
import UsersC from "./components/users/usersC";
import PostsC from "./components/posts/PostsC";
import ProfileC from "./components/profile/profile-c";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/signup">singup</Link>
        <br />
        <Link to="/posts">posts</Link>
        <br />
        <Link to="/users">users</Link>
        <br />
        <Link to="/profile">profile</Link>
        <Switch>
          <Route path="/signup" component={LandingC} />
          <Route path="/profile" component={ProfileC} />
          <Route path="/posts" component={PostsC} />
          <Route path="/users" component={UsersC} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
