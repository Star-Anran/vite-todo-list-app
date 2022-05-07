import React, { Component, useState } from 'react';
import { Input, Button } from 'antd';
import { STATUS } from '../../config/state';

const ToDoItem = (props) => {
  const { onSubmit } = props;

  const [todoItem, setTodoItem] = useState({
    id: Math.random(),
    content: '',
    state: STATUS.IS_CREATE,
  });

  const handleChange = (event) => {
    setTodoItem({
      ...todoItem,
      content: event.target.value,
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
