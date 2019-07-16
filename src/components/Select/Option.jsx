import React, { Component } from "react";
import "./styles.scss";
class Option extends Component {
  onSelect(value, label) {
    // 当前选中的值
    if (this.props.onSelect) {
      this.props.changeStatus(false);
      this.props.onSelect(value, label);
    }
  }
  render() {
    return (
      <div
        className={`tb-select-option ${
          this.props.defaultValue === this.props.value
            ? "tb-select-option-show"
            : ""
        } ${
          !this.props.searchValue ||
          this.props.label.match(this.props.searchValue)
            ? ""
            : "tb-select-option-no"
        }`}
      >
        <div
          className="tb-select-option-label"
          onClick={() => this.onSelect(this.props.value, this.props.label)}
        >
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Option;
