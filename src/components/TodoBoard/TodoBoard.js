import React from 'react';
import './TodoBoard.css';
import moment from 'moment';

const TodoBoard = ({ value }) => {
  return (
    <div className="Todo-container">
      <div className="text-gray-500 mt-4">
         {moment(value).format("YYYY년 MM월 DD일")}
      </div>
    </div>

  );
};

export default TodoBoard;
