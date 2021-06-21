import React from 'react';
import PropTypes from 'prop-types';

// extends=繼承，class一定要繼承React.Component
class AppClass extends React.Component {
  // 建構式是宣告狀態的方法
  //constructor中要接母元素的值，要加props參數，super也要加
  constructor(props) {
    // super為呼叫上層類別React.Component的建構式
    super(props);
    // this.state為物件，代表元件裡的狀態
    this.state = {
      total: props.initValue,
      // total: 0,
    };
  }

  render() {
    // //  如果有從父母元素拿到值，就用父母元素的值，沒拿到就用自己的值
    // let initValue = this.props.initValue
    //   ? this.props.initValue
    //   : this.state.total;

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
    );
  }
}

// 狀態檢查工具propTypes
AppClass.propTypes = {
  // initValue必須為數字且必填
  initValue: PropTypes.number.isRequired,
  title: PropTypes.string,
};
// 狀態檢查工具defaultProps
AppClass.defaultProps = {
  // initValue如果沒填預設帶0
  initValue: 0,
  // title如果沒填預設帶沒標題
  title: '沒標題',
};

export default AppClass;
