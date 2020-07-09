import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./landing.component.css";
import { creatUser } from "../../api/postData";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }
  handleApi = async () => {
    const res = await creatUser(this.state);
    console.log(res);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.handleApi();
    this.setState({
      name: "",
      password: "",
      email: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="email"
            onChange={this.handleChange}
            required
            id="standard-required"
            label="email"
            value={this.state.email}
          />
          {/* <input
            name="email"
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
          /> */}

          <TextField
            name="name"
            onChange={this.handleChange}
            required
            id="standard-required"
            label="full name"
            value={this.state.name}
          />
          {/* <input
            name="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          /> */}

          <TextField
            name="password"
            onChange={this.handleChange}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={this.state.password}
          />
          {/* <input
                name="password"
                onChange={this.handleChange}
                type="password"
                value={this.state.password}
            /> */}
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
          {/* <input type="submit" value="submit" /> */}
        </form>
      </div>
    );
  }
}
