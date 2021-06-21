import React, { useState } from 'react';
import AppFunction from './AppFunction';
import AppClass from './AppClass';
import AppClassCopy from './AppClassCopy';
import MyButtonOne from './MyButtonOne';
import MyButtonTwo from './MyButtonTwo';

function App(props) {
  // const [show, setShow] = useState(false);
  // const [num, setNum] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      {/* <AppClass title='類別型元件' initValue={99} />
      <AppClassCopy />
      <AppFunction title='函式型元件' initValue={101} />
      <MyButtonOne title='復活吧~' clickMethod={() => setShow(true)} />
      {show ? (
        <MyButtonTwo title='我不要活了' clickMethod={() => setShow(false)} />
      ) : (
        ''
      )} */}
      {/* 三元表達式，if 條件show為true，? 執行顯示button，否則執行 : 空值 */}
      {/* {show && (
        <MyButtonTwo title='我不要活了' clickMethod={() => setShow(false)} />
      )}
      &&是React中的邏輯語，相當於if，若&&前的條件為true就執行後面的動作，為false就不動作 */}
      {/* <h1>{num}</h1>
      <MyButtonOne title='傳資料給母元件' setNum={setNum} /> */}
      {/* 將更改母元件num的函式setNum藉由屬性傳值的方式，從母元件將函式傳給子元件 */}
      <MyButtonOne title='我接資料(子女)' text={text} />
      <MyButtonTwo title='我傳資料給buttonOne(子女)' setText={setText} />
    </>
  );
}

export default App;
