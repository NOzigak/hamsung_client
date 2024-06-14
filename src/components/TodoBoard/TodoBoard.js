import React from 'react';
import './TodoBoard.css';
import moment from 'moment';

const TodoBoard = ({ value }) => {
  return (
    <div className="Todo-container">
      <div className="currentDate">
         {moment(value).format("YYYY년 MM월 DD일")}
      </div>
      <input 
        type="text" 
        className="todo-input" 
        placeholder="내용을 추가해주세요."
      />
    </div>

  );
};

export default TodoBoard;
