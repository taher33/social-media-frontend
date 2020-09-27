import React from "react";
import NavBarV from "./nav-bar-view";
import { connect } from "react-redux";
import { LOGIN, LOGOUT, logout_server } from "../../store/actions";
import { useHistory } from "react-router-dom";

function NavBar(props) {
  console.log(props);
  const history = useHistory();
  const handleLogINBtn = () => {
    if (!props.logedIn) {
      history.push("/logIn");
      props.onLogIn();
    } else props.onLogOut();
    console.log(props);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
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
    onLogOut: () => dispatch(logout_server()),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(NavBar);
