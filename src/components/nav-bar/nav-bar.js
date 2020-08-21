import React from "react";
import NavBarV from "./nav-bar-view";
import { connect } from "react-redux";
import { LOGIN, LOGOUT } from "../../store/actions";

function NavBar(props) {
  const handleLogINBtn = () => {
    if (!props.logedIn) props.onLogIn();
    else props.onLogOut();
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
