import React, { useState } from "react";
import "./WeeklyStudyModal.css";

const WeeklyStudyModal = ({ onClose }) => {
  const [attendance, setAttendance] = useState("");
  const [lateness, setLateness] = useState("");
  const [absence, setAbsence] = useState("");
  const [assignment, setAssignment] = useState("");

  return (
    <div className="weekly-modal">
      <div className="weekly-message-design">스터디 관리</div>
      <div className="weekly-modal-content">
        <div className="weeklyInputList">
          출석
          <input 
            className="weeklyInput"
            type="text" 
            value={attendance} 
            onChange={(e) => setAttendance(e.target.value)} 
          />
        </div>
        <div className="weeklyInputList">
          지각
          <input
            className="weeklyInput"
            type="text" 
            value={lateness} 
            onChange={(e) => setLateness(e.target.value)} 
          />
        </div>
        <div className="weeklyInputList">
          결석
          <input 
            className="weeklyInput"
            type="text" 
            value={absence} 
            onChange={(e) => setAbsence(e.target.value)} 
          />
        </div>
        <div className="weeklyInputList">
          과제
          <input 
            className="weeklyInput"
            type="text" 
            value={assignment} 
            onChange={(e) => setAssignment(e.target.value)} 
          />
        </div>
        <button className="weekly-ok-button" onClick={onClose}>저장</button>
      </div>
    </div>
  );
};

export default WeeklyStudyModal;
