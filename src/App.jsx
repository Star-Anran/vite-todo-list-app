import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoContainer from './components/ToDoContainer';
import {message} from 'antd'


function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (todoItem) => {
    console.log('App:',todoItem);
    if(todoItem.content&&todoItem.content!=='') {
      setTodos([
        ...todos,
        todoItem
      ]);
    } else {
      message.warning('代办内容不能为空！');
      return false;
    }
  };

  const handleOperate=(todoItem)=>{
    console.log(todoItem);
    const newTodos=todos.filter(todo=>todo.id!==todoItem.id);
    newTodos.push(todoItem);
    setTodos(newTodos);
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">代办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoContainer todos={todos} onOperate={handleOperate}/>
    </div>
  );
}

export default App;
