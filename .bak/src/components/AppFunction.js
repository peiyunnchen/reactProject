// 導入react or其他模組(元件) from react(東西在node_module裡)
// 使用{}導入的模組，為部分導入
import React, { useState } from 'react';
import './App.css';
// use開頭的function都是hooks

// function component函式型元件
// App()為開發者自訂的元件，自訂元件開頭一定要大寫，檔案名要跟這個自訂元件同名
// props是規定寫法，props是母元件傳來的物件
function AppFunction(props) {
  // [getter(只能access),setter(是改變getter的function)]
  // 呼叫useState function，設定初始化值為0,回傳一組陣列含getter與setter
  const [total, setTotal] = useState(props.initValue);
  // 從母元件的props物件中取initValue

  return (
    //根元素超過一個就要空白括號
    <>
      {/* {}花括號內放變數、表達式 */}
      {/* // props是規定寫法，props是物件會拿到母元素的資料 */}
      <h1>{props.title}</h1>
      <h1>{total}</h1>
      {/* onClick=.addEventListener */}
      {/* 事件+function。setTotal是改變狀態getter的函式，setTotal() */}
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  );
}

// 輸出函式(元件)=call function
export default AppFunction;
