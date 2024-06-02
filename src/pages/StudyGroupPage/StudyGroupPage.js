import React, { useState } from "react";
import "./StudyGroupPage.css";
import FinishStudyModal from "./FinishStudyModal";

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
      <div className="mainTag"></div>
      <p className="title">면접 스터디</p>
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

