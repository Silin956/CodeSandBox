import React, { Component } from "react";
import "./styles.scss";

export default class Model extends Component {
  onClickBackGround() {
    // 点击遮罩层事件
    if (this.props.maskClosable && this.props.onClose) {
      this.props.onClose();
    }
    return;
  }
  render() {
    return (
      <div className={`${this.props.visible ? "tb-model" : ""}`}>
        {this.props.visible ? (
          <div
            className="tb-model-backgroud"
            onClick={() => this.onClickBackGround()}
          />
        ) : null}
        {this.props.visible ? (
          <div className={`tb-model-${this.props.size} tb-model-show`}>
            {this.props.children}
          </div>
        ) : (
          <div className="tb-model-hide" />
        )}
      </div>
    );
  }
}

Model.defaultProps = {
  visible: false, // model弹框显示隐藏
  size: "simple", // model弹框大小
  maskClosable: true // 点击遮罩层是否隐藏弹出框
};
