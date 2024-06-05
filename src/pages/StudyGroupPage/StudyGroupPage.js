import React, { useState } from "react";
import "./StudyGroupPage.css";
import FinishStudyModal from "../../components/FinishStudyModal/FinishStudyModal";
import { Navbar } from "../../components/Navbar/Navbar";
import studyPoint from "../../assets/studyPoint.png";

const StudyPage = () => {
  const [showFinishStudyModal, setShowFinishStudyModal] = useState(false);
  
  const handleFinishClick = () => {
    setShowFinishStudyModal(true);
  };

  const handleCloseFinishStudyModal = () => {
    setShowFinishStudyModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="title-container">
        <p className="title">면접 스터디</p>
        <img className="studyPoint" src={studyPoint} alt="StudyPoint" />
        <p className="studyPoint-text">1150 P</p>
      </div>

      <button className="finish-button" onClick={handleFinishClick}>스터디 종료</button>
      <div className="outline"></div>

      {showFinishStudyModal && (
        <FinishStudyModal 
          onClose={handleCloseFinishStudyModal}
        />
      )}
    </div>
  );
};

export default StudyPage;

