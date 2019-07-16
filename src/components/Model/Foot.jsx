import React, { Component } from "react";

export default class Foot extends Component {
  onClose() {
    // 关闭弹窗
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  onSubmit() {
    // 确认操作
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  }
  render() {
    return (
      <div className="tb-model-foot">
        <div>{this.props.children}</div>
        <div className="tb-model-foot-btn">
          <div className="tb-model-foot-btn1" onClick={() => this.onClose()}>
            返回
          </div>
          <div className="tb-model-foot-btn2" onClick={() => this.onSubmit()}>
            {this.props.handle || "确定"}
          </div>
        </div>
      </div>
    );
  }
}
