import React, { useState } from 'react';
import MoneyInput from './component/MoneyInput';
import Datepicker from './component/Datepicker';
import TodoApp from './component/TodoApp';

function App(props) {
  const [twd, setTwd] = useState(0);
  const [usd, setUsd] = useState(0);
  const usd2Twd = (usd) => (usd * 28.53).toFixed(2);
  const twd2Usd = (twd) => (twd > 0 ? (twd / 28.53).toFixed(2) : 0);
  //toFixed()規定小數點後幾位數
  // 用三元表達式規範twd要>0，因為在程式中拿0去除，答案會變成無限大

  return (
    <>
      <MoneyInput
        title='新台幣'
        money={twd}
        setMoney={(value) => {
          setTwd(value);
          setUsd(twd2Usd(value));
        }}
        // 從子元件得到value值，用以顯示子元件的輸入框值、換算值
      />
      <MoneyInput
        title='美金'
        money={usd}
        setMoney={(value) => {
          setUsd(value);
          setTwd(usd2Twd(value));
        }}
      />
      {/* 上方是component的做法 */}
      新台幣:
      <input
        type='text'
        value={twd}
        onChange={(event) => {
          const newTwd = event.target.value;
          // 因為下方的setState function是異步的，所以要先得到twd值
          setTwd(newTwd);
          setUsd(twd2Usd(newTwd));
        }}
      />
      <br />
      美金:
      <input
        type='text'
        value={usd}
        onChange={(event) => {
          const newUsd = event.target.value;
          setUsd(newUsd);
          setTwd(usd2Twd(newUsd));
        }}
      />
      <Datepicker />
      <TodoApp />
    </>
  );
}

export default App;
