import React, { Component } from 'react';
import { List } from 'antd';
import { CheckCircleTwoTone,CloseCircleTwoTone } from '@ant-design/icons';
import { STATUS } from '../../config/state';

const ToDoContainer = (props) => {
  const { todos = [],onOperate,filterStatus } = props;

  const handleOperate=(operate,item)=>{
    console.log('Operate:',operate,item);
    switch(operate) {
        case 'is-delete':
            onOperate&&onOperate({
                ...item,
                state:STATUS.IS_DELETE
            })
        break;
        case 'is-done':
            onOperate&&onOperate({
                ...item,
                state:item.state===STATUS.IS_DONE?STATUS.IS_CREATE:STATUS.IS_DONE
            })
        break;
        default:
        break;
    }
  }

  const showTodos=todos.filter(todo=>{
    return todo.state!=STATUS.IS_DELETE&&
    filterStatus.indexOf(todo.state.toString())>-1;
  })

  return (
    <div className="todo-container">
      <List dataSource={showTodos} 
      renderItem={(todo) => 
        <List.Item className={todo.state===STATUS.IS_DONE?'todo-container-list-done':'todo-container-list'}>
            {todo.content}
            <div>
                <CloseCircleTwoTone onClick={()=>handleOperate("is-delete",todo)} className='todo-item-operate'/>
                <CheckCircleTwoTone onClick={()=>handleOperate("is-done",todo)} className='todo-item-operate'/>
            </div>
        </List.Item>} 
      />
    </div>
  );
};

export default ToDoContainer;
