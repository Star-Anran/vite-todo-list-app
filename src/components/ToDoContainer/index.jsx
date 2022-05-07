import React, { Component } from 'react';
import { List } from 'antd';
import { CheckCircleTwoTone,CloseCircleTwoTone } from '@ant-design/icons';
import { STATUS } from '../../config/state';

const ToDoContainer = (props) => {
  const { todos = [],onOperate } = props;

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
                state:STATUS.IS_DONE
            })
        break;
        default:
        break;
    }
  }

  return (
    <div className="todo-container">
      <List dataSource={todos} 
      renderItem={(todo) => 
        <List.Item className='todo-container-list'>
            {todo.content}
            <div className='todo-item-operate'>
                <CloseCircleTwoTone onClick={()=>handleOperate("is-delete",todo)}/>
                <CheckCircleTwoTone onClick={()=>handleOperate("is-done",todo)}/>
            </div>
        </List.Item>} 
      />
    </div>
  );
};

export default ToDoContainer;
