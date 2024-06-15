import React from 'react';
import ModalPage from './ModalPage';

const ReviewModal = ({ closeModal, currentPage, nextPage, prevPage }) => {
    const totalPages = 4; 

    return (
        <div className="review-modal">
            <button className="close-modal-button" onClick={closeModal}>닫기</button>
            <ModalPage page={currentPage} />
            <div className="modal-pagination">
                {currentPage !== 1 && <button onClick={prevPage}>이전</button>}
                {currentPage !== totalPages && <button onClick={nextPage}>다음</button>}
            </div>
        </div>
    );
};

export default ReviewModal;
