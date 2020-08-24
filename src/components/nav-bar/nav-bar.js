import React from "react";
import NavBarV from "./nav-bar-view";
import { connect } from "react-redux";
import { LOGIN, LOGOUT } from "../../store/actions";
import { useHistory } from "react-router-dom";

function NavBar(props) {
  const history = useHistory();
  const handleLogINBtn = () => {
    if (!props.logedIn) {
      history.push("/logIn");
      props.onLogIn();
    } else props.onLogOut();
    console.log(props);
  };
  return (
    <div>
      <NavBarV handleLog={handleLogINBtn} isLoged={props.logedIn} />
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    logedIn: state.auth.logedIn,
  };
};
const mapDispatchtoProps = dispatch => {
  return {
    onLogIn: () => dispatch({ type: LOGIN }),
    onLogOut: () => dispatch({ type: LOGOUT }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);
