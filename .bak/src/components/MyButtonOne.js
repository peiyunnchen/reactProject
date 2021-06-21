import React, { useState } from 'react';

function MyButtonOne(props) {
  const innerValue = 100;

  return (
    <>
      {/* <button onClick={props.clickMethod}>{props.title}</button> */}
      <button onClick={() => props.setNum(innerValue)}>{props.title}</button>
      {/* 當觸發button click事件時，執行function，從母元素的object props中拿出setNum函式來更改母元素的值 */}
      <h1>我是one的h1{props.text}</h1>
    </>
  );
}

export default MyButtonOne;
