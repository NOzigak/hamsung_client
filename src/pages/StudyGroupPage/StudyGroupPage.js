import React, { useState } from "react";
import './StudyGroupPage.css';
import FinishStudyModal from "../../components/FinishStudyModal/FinishStudyModal";
import NoticeBox from "../../components/NoticeBox/NoticeBox";
import StudyCalendar from "../../components/StudyCalendar/StudyCalendar";
import TodoBoard from "../../components/TodoBoard/TodoBoard";
import { Navbar } from "../../components/Navbar/Navbar";
import studyPoint from "../../assets/studyPoint.png";

const StudyPage = () => {
  const [showFinishStudyModal, setShowFinishStudyModal] = useState(false);
  const [value, setValue] = useState(new Date()); 
  const [weekCount, setWeekCount] = useState(2); 

  const handleFinishClick = () => {
    setShowFinishStudyModal(true);
  };

  const handleCloseFinishStudyModal = () => {
    setShowFinishStudyModal(false);
  };

  const handleCalendarChange = (newValue) => {
    setValue(newValue); 
  };

  const addStudy = () => {
    setWeekCount(weekCount + 1); 
  };

  return (
    <div>
      <Navbar />
      <div className="title-container">
        <p className="title">면접 스터디</p>
        <img className="studyPoint" src={studyPoint} alt="StudyPoint" />
        <p className="studyPoint-text">350 P</p>
      </div>
      <button className="finish-button" onClick={handleFinishClick}>스터디 종료</button>
      <div className="outline"></div>

      <div className="boardList">
        <NoticeBox />
      </div>

      <div>
        <StudyCalendar onChange={handleCalendarChange} /> {/* onChange props 전달 */}
      </div>

      <div>
        <TodoBoard value={value} /> {/* value props 전달 */}
      </div>

      <div className="weekly-container">
        <p className="weekly-container-title">스터디 관리</p>
        {[...Array(weekCount)].map((_, index) => (
          <div key={index}>
            <button className="weekly-study">{`${index + 1}주차 스터디`}</button>
          </div>
        ))}
        
        <div>
          <button className="addStudy" onClick={addStudy}>➕</button>
        </div>
      </div>

      {showFinishStudyModal && (
        <FinishStudyModal 
          onClose={handleCloseFinishStudyModal}
        />
      )}
    </div>
  );
};

export default StudyPage;