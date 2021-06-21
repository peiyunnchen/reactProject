import React, { useState } from 'react';

function MyButtonTwo(props) {
  const innerValue = '這是two中的資料';

  return (
    <>
      {/* <button onClick={props.clickMethod}>{props.title}</button> */}
      <button onClick={() => props.setText(innerValue)}>{props.title}</button>
    </>
  );
}

export default MyButtonTwo;
