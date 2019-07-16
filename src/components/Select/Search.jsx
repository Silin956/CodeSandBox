import React, { Component } from "react";
import "./styles.scss";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onChange(e) {
    const value = e.target.value;
    this.setState({ value }, () => {
      if (this.props.onSearch) {
        if (this.state.value) {
          this.props.onSearch(value);
        } else {
          this.props.onSearch(null);
        }
      }
    });
  }
  clearValue() {
    this.setState({ value: "" });
  }
  render() {
    return (
      <div className="tb-select-search">
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e)}
        />
        <span onClick={() => this.clearValue()}>x</span>
      </div>
    );
  }
}
