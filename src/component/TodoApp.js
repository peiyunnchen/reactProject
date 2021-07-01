import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  // 定義todoinput狀態，初始值為空字串
  const [todoInput, setTodoInput] = useState('');
  // 定義todos項目狀態
  // 每個代辦事項改為物件值{id, text:string, completed:bool, edited:bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone', completed: true, edited: false },
    { id: 2, text: '捐血換錢', completed: true, edited: false },
  ]);
  const handleComplete = (id) => {
    // 把陣列拆開，才能更新，沒拆開就放新的，會全部覆蓋
    const newTodos = [...todos];
    // findIndex利用id值尋找對應的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);
    // 若findIndex沒有找到符合的項目就會回傳-1
    // 當有找到符合的項目，就將其completed狀態改為相反
    if (todoItemIndex !== -1) {
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed;
      setTodos(newTodos);
      // 用setTodos更新todos
    }
  };
  // 刪除函式
  const handleDelete = (id) => {
    // 被點擊刪除的id，該項id項目不會被加進newTodos裡
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    // 用setTodos更新todos
  };
  return (
    <>
      <h1>TodoList</h1>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default TodoApp;
