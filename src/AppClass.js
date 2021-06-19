import React from 'react'

// extends=繼承，class一定要繼承React.Component
class AppClass extends React.Component {
  // 建構式是宣告狀態的方法
  //constructor中要接母元素的值，要加props參數，super也要加
  constructor(props) {
    // super為呼叫上層類別React.Component的建構式
    super(props)
    // this.state為物件，代表元件裡的狀態
    this.state = {
      total: props.initValue,
    }
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>

        <h1>{this.state.total}</h1>
        {/* setState=setter,裡面要放obj */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    )
  }
}

export default AppClass
