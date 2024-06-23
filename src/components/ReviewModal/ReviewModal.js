import React from 'react';
import ModalPage from './ModalPage';
import "./ReviewModal.css";

const ReviewModal = ({ closeModal, currentPage, nextPage, prevPage }) => {
    const totalPages = 4; 

    return (
        <div className="review-modal">
            <div className="review-content">
              <ModalPage page={currentPage} />
              <button className="close-review-button" onClick={closeModal}>✖</button>
              <div>
                 <reviewList />
              </div>
              <div>
                 {currentPage !== 1 && <button className="front-button" onClick={prevPage}>이전</button>}
                 {currentPage !== totalPages && <button className="back-button" onClick={nextPage}>다음</button>}
              </div>
            </div>
        </div>
    );
};

export default ReviewModal;
