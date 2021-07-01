import React from 'react';
function TodoList(props) {
  const { todos, handleComplete, handleDelete } = props;
  return (
    <>
      {' '}
      <hr />
      {/* 分隔線 */}
      {/* map迴圈渲染出li，map要搭配key值*/}
      <ul>
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.text}>
              <input
                name='isGoing'
                type='checkbox'
                checked={item.completed}
                onChange={() => handleComplete(item.id)}
              />
              <del>{item.text}</del>
              <button onClick={() => handleDelete(item.id)}>編輯</button>
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          ) : (
            <li key={item.text}>
              <input
                name='isGoing'
                type='checkbox'
                checked={item.completed}
                onChange={() => handleComplete(item.id)}
              />
              {item.text}
              <button onClick={() => handleDelete(item.id)}>編輯</button>
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default TodoList;
