import React from "react";
import "./DeleteID.css";

const DeleteID = ({ show, handleClose, handleConfirm }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="message-design">확인 메시지</div>
      <div className="modal-content">
        <p>회원 탈퇴 시, Hamsung에 로그인 하실 수 없으며
          보유하신 정보가 모두 삭제되어 복구할 수 없습니다. 정말 탈퇴하시겠습니까?
        </p>
        <button className="confirm-button" onClick={handleConfirm}>탈퇴</button>
        <button className="cancel-button" onClick={handleClose}>취소</button>
      </div>
    </div>
  );
};

export default DeleteID;
