import React from 'react';
function TodoInput(props) {
  const { todoInput, setTodoInput, setTodos, todos } = props;

  return (
    <>
      <input
        type='text'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        // 監測按鍵
        onKeyPress={(e) => {
          // 如果按下enter且有值
          if (e.key === 'Enter' && e.target.value) {
            // 新增一個newItem
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
              edited: false,
            };
            // 將newItem與既有的todos項目組成newTodos陣列
            const newTodos = [newItem, ...todos];
            // 變更todos資料狀態
            setTodos(newTodos);
            // 清空輸入框
            setTodoInput('');
          }
        }}
      ></input>
      {/* 監測到input改變時，把input的值帶入setTodoInput函式，改變todoInput值 */}
    </>
  );
}

export default TodoInput;
