import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./landing.component.css";
import { creatUser } from "../../api/postData";
import { Link, Typography } from "@material-ui/core";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      passwordConf: "",
    };
  }
  handleApi = async () => {
    const res = await creatUser(this.state);
    console.log(res);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.handleApi();
    this.setState({
      name: "",
      password: "",
      email: "",
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <TextField
          name="email"
          onChange={this.handleChange}
          required
          id="standard-required"
          label="email"
          value={this.state.email}
          variant="outlined"
        />
        <TextField
          name="name"
          onChange={this.handleChange}
          required
          id="standard-required"
          label="full name"
          value={this.state.name}
          variant="outlined"
        />
        <TextField
          name="password"
          onChange={this.handleChange}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={this.state.password}
          variant="outlined"
        />
        <TextField
          name="passwordConf"
          onChange={this.handleChange}
          id="standard-password-input"
          label="confirm password"
          type="password"
          autoComplete="current-password"
          value={this.state.passwordConf}
          variant="outlined"
        />
        <div className="action-form">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <br />
          <Link
            onClick={this.props.handleLogin}
            component="button"
            variant="body2"
          >
            <Typography>login</Typography>
          </Link>
        </div>
      </form>
    );
  }
}
