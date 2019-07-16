import React, { Component } from "react";
import "./styles.scss";

export default class Head extends Component {
  onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  render() {
    return (
      <div className="tb-model-head">
        <span className="tb-model-head-title">{this.props.title}</span>
        <span className="tb-model-head-icon" onClick={() => this.onClose()}>
          x
        </span>
      </div>
    );
  }
}
Head.defaultProps = {
  title: null // 标题文本内容
};
