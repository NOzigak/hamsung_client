import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './StudyCalendar.css';

const StudyCalendar = ({ onChange }) => { 
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue); 
  };

  return (
    <div className="study-calendar">
      <Calendar onChange={handleChange} value={value} />
    </div>
  );
};

export default StudyCalendar;

