// React controlled forms
// Each input needs a value and onChange. The onChange needs a handler and the value needs to match a state object

import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "website",
      comments: "",
    };
  }

  //   Targets the below form input onChange and updates the above value of the name state
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Please fill out the form below</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name: </label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              id="id-name"
              name="name"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="id-category">Query category: </label>
            <select
              value={this.state.category}
              onChange={this.handleCategory}
              name="category"
              id="id-category"
            >
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleComments}
              id="id-comments"
              name="comments"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
