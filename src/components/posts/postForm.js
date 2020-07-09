import React, { Component } from "react";
import { createPost } from "../../api/postData";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postData: "",
    };
  }

  postData = async () => {
    const result = await createPost(this.state);
    console.log(result);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <span>write any thing</span>
          <input
            name="postData"
            onChange={this.handleChange}
            value={this.state.postData}
          />
          <br />
          <span>your name </span>
          <input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
