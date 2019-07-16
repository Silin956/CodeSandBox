import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return <div className="tb-model-body">{this.props.children}</div>;
  }
}
