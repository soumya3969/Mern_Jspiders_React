import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>classComponent</h1>
        {console.log(this.props)}
        <li>{this.props.name}</li>
        <li>{this.props.address}</li>
        <li>{this.props.wicket}</li>

      </div>
    );
  }
}
