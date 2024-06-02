import React from "react";



const EditProfile = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <p>프로필 수정</p>
        <button className="cancel-button" onClick={handleClose}>취소</button>
      </div>
    </div>
  );
};

export default EditProfile;