import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
  //   定義datepicker選取生日
  const [birthDate, setBirthDate] = useState(new Date());
  //   定義年齡狀態
  const [age, setAge] = useState(0);
  //   計算年齡公式javascript提供
  const calcAge = (birthday) => ~~((Date.now() - birthday) / 31557600000);
  // 把選取的日期birthDate帶入年齡計算公式，得出年齡後帶入setAge改變年齡狀態
  useEffect(() => {
    setAge(calcAge(birthDate));
  }, [birthDate]);
  //  觀測變數為選取的日期
  return (
    <>
      <h1>範例 : 日期選擇器，檢查是否滿18歲</h1>
      <DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
      <h2>{age < 18 ? '未滿18喔!' : '滿18歲'}</h2>
    </>
  );
};
export default Datepicker;
