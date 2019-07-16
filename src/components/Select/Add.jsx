import React, { Component } from "react";

export default class Add extends Component {
  onAdd() {
    if (this.props.onAdd) {
      this.props.onAdd();
    }
  }
  changeStatus() {
    if (this.props.changeStatus && this.props.hide) {
      this.props.changeStatus();
    }
  }
  render() {
    return (
      <div
        className="tb-select-add"
        onClick={() => {
          this.onAdd();
          this.changeStatus();
        }}
      >
        <span>{this.props.text}</span>
        <span>+</span>
      </div>
    );
  }
}
Add.defaultProps = {
  text: "新增", // 新增部分文本字样
  hide: false // 点击“新增”后是否收起下拉项
};
