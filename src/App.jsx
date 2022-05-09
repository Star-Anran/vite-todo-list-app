import React, { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoFilter from './components/ToDoFilter';
import ToDoContainer from './components/ToDoContainer';
import {message} from 'antd'
import {STATUS} from './config/state'


function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus,setfilterStatus]=useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`);

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

  const handleStatusChange=(status)=>{
    console.log('status:',status);
    setfilterStatus(status);
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">代办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoFilter 
        filterStatus={filterStatus} 
        onFilterStatus={handleStatusChange}
      />
      <ToDoContainer 
        todos={todos} 
        filterStatus={filterStatus} 
        onOperate={handleOperate}
      />
    </div>
  );
}

export default App;
