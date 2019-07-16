import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Select from "./components/Select";
import Model from "./components/Model";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  model() {
    this.setState({ visible: true });
  }
  onClose() {
    this.setState({ visible: false });
  }
  onSubmit() {
    console.log("点击了确认按钮");
  }

  onSelect(value) {
    console.log("当前选中的值为：" + value);
  }
  onAdd() {
    console.log("刚刚点击了新增");
  }
  render() {
    return (
      <div className="app" style={{ width: "100%", height: "100%" }}>
        <Select
          defaultValue="2"
          defaultContent="你好1"
          onSelect={value => this.onSelect(value)}
          onAdd={() => this.onAdd()}
        >
          <Select.Search />
          <Select.Option
            value="1"
            label="疯狂Coding疯狂Coding疯狂Coding疯狂Coding疯狂Coding疯狂Coding疯狂Coding"
          />
          <Select.Option value="2" label="学习呀学习呀学习呀学习呀" />
          <Select.Option value="3" label="上海金融中心" />
          <Select.Option value="4" label="上海金茂大厦" />
          <Select.Option value="5" label="上海外滩中心" />
          <Select.Option value="6" label="国际金融中心" />
          <Select.Option value="7" label="上海东方明珠广播电视塔" />
          <Select.Option value="8" label="上海迪士尼" />
          <Select.Option value="9" label="上海浦东发展银行" />
          <Select.Option value="10" label="南京路步行街" />
          <Select.Add text="新增" hide />
        </Select>
        <br />
        <div onClick={() => this.model()}>点击弹出model框</div>
        <br />
        <Model
          visible={this.state.visible}
          size="simple"
          onClose={() => this.onClose()}
        >
          <Model.Head title="Model标题" onClose={() => this.onClose()} />
          <Model.Body>
            <div>我是主要内容</div>
          </Model.Body>
          <Model.Foot
            handle="确认按钮"
            onClose={() => this.onClose()}
            onSubmit={() => this.onSubmit()}
          />
        </Model>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
