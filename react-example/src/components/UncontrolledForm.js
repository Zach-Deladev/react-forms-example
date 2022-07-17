// React Uncontrolled forms


// features - less featureful due to lack of control over input fields
//  Pro's - Easier to implement than controlled forms, quick workaround "to get the job done"

import React, { Component } from "react";

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    // This allows react to link to the input through a ref attribute
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputComments = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Test to see if correct values are being logged
    console.log(this.inputName.current.value);
    console.log(this.inputCategory.current.value);
    console.log(this.inputComments.current.value);
  };

  render() {
    return (
      <div>
        <h2>Please fill out the Uncontrolled form below</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name: </label>
            <input id="id-name" name="name" type="text" ref={this.inputName} />
          </div>

          <div>
            <label htmlFor="id-category">Query category: </label>
            <select name="category" id="id-category" ref={this.inputCategory}>
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea
              id="id-comments"
              name="comments"
              ref={this.inputComments}
              //   Can add a default value to inputs by using defaultValue="John Smith"
              defaultValue="John Smith"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
