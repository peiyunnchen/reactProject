import React from 'react';

function MoneyInput(props) {
  return (
    <>
      {props.title}:{/* 從母元件得到輸入框台幣/美金標題 */}
      <input
        type='text'
        value={props.money}
        //   從母元件setMoney function中的setTwd/setUsd access到輸入框的值]
        onChange={(event) => {
          props.setMoney(+event.target.value);
          // 輸入框發生變化時，值丟進母元件setMoney function中
        }}
      />
    </>
  );
}
export default MoneyInput;
