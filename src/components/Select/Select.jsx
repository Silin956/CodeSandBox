import React from "react";
import "./styles.scss";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open, // 下拉显示隐藏
      defaultValue: this.props.defaultValue, // 默认value
      content: "", // 默认显示值
      searchValue: null //  查询字端默认值
    };
  }
  onSelect(value, label) {
    // 选中option事件
    this.setState({ content: label, defaultValue: value });
    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  }
  onSearch(value) {
    // 搜索框输入事件
    if (value) {
      console.log(value);
      this.setState({ searchValue: value }, () => {
        if (this.props.onRequset) {
          this.props.onRequest();
        }
      });
    } else {
      this.setState({ searchValue: null });
    }
  }
  onAdd() {
    // 下拉框新增事件
    if (this.props.onAdd) {
      this.props.onAdd();
    }
  }
  changeStatus(status) {
    // 改变下拉与收起状态
    if (arguments.length > 0) {
      this.setState({ open: status });
      return;
    }
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const otherMethods = {
      defaultValue: this.state.defaultValue, // 默认值
      searchValue: this.state.searchValue, // 搜索值值
      onSelect: (value, label) => this.onSelect(value, label), //选值操作
      changeStatus: () => this.changeStatus(), // option消失
      onSearch: value => this.onSearch(value), // 搜索功能
      onAdd: () => this.onAdd() // 新增按钮事件
    };
    return (
      <div className="app">
        <div className="tb-select">
          <div className="tb-select-wrap" onClick={() => this.changeStatus()}>
            <div className="tb-select-content">
              {this.state.content || this.props.defaultContent}
            </div>
            <span
              className={`tb-select-square ${
                this.state.open
                  ? "tb-select-square-show"
                  : "tb-select-square-hide"
              }`}
            />
          </div>
          <div
            className={`tb-select-options ${
              this.state.open
                ? "tb-select-options-show"
                : "tb-select-options-hide"
            }`}
          >
            {this.state.open
              ? React.Children.map(this.props.children, child =>
                  React.cloneElement(child, { ...this.props, ...otherMethods })
                )
              : null}
          </div>
        </div>
      </div>
    );
  }
}
Select.defaultProps = {
  open: false, // 下拉的现实隐藏
  defaultValue: "1" // 默认值
};
