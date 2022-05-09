import React, { Component, useState } from 'react';
import { Input, Button } from 'antd';
import { STATUS } from '../../config/state';

const ToDoItem = (props) => {
  const { onSubmit } = props;

  const [todoItem, setTodoItem] = useState({});

  const handleChange = (event) => {
    setTodoItem({
      id: Math.random(),
      content: event.target.value,
      state: STATUS.IS_CREATE,
    });
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(todoItem);
  };

  return (
    <div className="todo-item-input">
      <Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} allowClear/>
      <Button size="large" type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
};

export default ToDoItem;
