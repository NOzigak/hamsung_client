import React, { useState } from 'react';
import './TodoBoard.css';
import moment from 'moment';

const TodoBoard = ({ value }) => {
  const [todo, setTodo] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const currentDate = moment(value).format("YYYY-MM-DD");
      const newTodoList = {
        ...todo,
        [currentDate]: [...(todo[currentDate] || []), inputValue]
      };
      setTodo(newTodoList);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (date, index) => {
    const updatedTodoList = {
      ...todo,
      [date]: todo[date].filter((_, i) => i !== index)
    };
    setTodo(updatedTodoList);
  };

  const currentDate = moment(value).format("YYYY-MM-DD");
  const currentTodo = todo[currentDate] || [];

  return (
    <div className="Todo-container">
      <div className="currentDate">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div>
      <input
        type="text"
        className="todo-input"
        placeholder="내용을 추가해주세요."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="todo-list">
        {currentTodo.map((todoItem, index) => (
          <div key={index} className="todo-item">
            {todoItem}
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(currentDate, index)}
            >
              ❎
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBoard;

