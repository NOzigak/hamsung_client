
import { useNavigate } from "react-router-dom";
import "./SignupModal.css";

function SignupModal({ setModalOpen, id, title, content, writer }) {
    
    const nav = useNavigate();
    // 모달 끄기 
    const closeModal = (e) => {
        setModalOpen(false);
        nav("/");
        e.preventDefault();
    };

    return (
        <div className="container">
          <div className="title">
            <p>확인메시지</p>
          </div>
          <div className="desc">
            <p>회원가입 성공.</p>
          </div>
          <div className="btnWrapper">
            <button className="close" onClick={closeModal}>
                확인
            </button>
          </div>

        </div>
    );
}
export default SignupModal;
