import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  // 定義todoinput狀態，初始值為空字串
  const [todoInput, setTodoInput] = useState('');
  // 定義todos狀態，初始值為空陣列
  const [todos, setTodos] = useState(['買iphone', '捐血換錢']);
  return (
    <>
      <h1>todolist</h1>
      <input
        type='text'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        // 監測按鍵
        onKeyPress={(e) => {
          // 如果按下enter且有值
          if (e.key === 'Enter' && e.target.value) {
            // 製作一個newtodos，放入新值跟原本的值
            const newTodos = [e.target.value, ...todos];
            // 變更todos資料狀態
            setTodos(newTodos);
            // 清空輸入框
            setTodoInput('');
          }
        }}
      ></input>
      {/* 監測到input改變時，把input的值帶入setTodoInput函式，改變todoInput值 */}
      <hr />
      {/* 分隔線 */}
      {/* map迴圈渲染出li，map要搭配key值*/}
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
};
export default TodoApp;
