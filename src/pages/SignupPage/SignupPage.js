import { Link } from "react-router-dom";
import "./SignupPage.css";
import { useEffect, useState } from "react";
import { validateUser } from "../../utils/validate";
import AuthInput from "../../components/AuthInput/AuthInput";
import SignupModal from "../../components/SignupModal/SignupModal";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    isNameValide: false,

    email: '',
    isEamilValid: false,

    password: '',
    isPwValide: false,

    passwordConfirm: '',
    pwConfirmValide: false,
  });

  const [errors, setErrors] =useState({});
  // 모달 노출 여부
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const {userName, email, password, passwordConfirm} = formData;

  useEffect(() => {
    setErrors(validateUser(formData))
  }, [formData])

  const onChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name] : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors(validateUser(formData))

    // login hook
    if(Object.values(errors)[0].length === 0 && Object.values(errors)[1].length === 0 &&
    Object.values(errors)[2].length === 0 && Object.values(errors)[3].length === 0
    ){
      showModal()
      console.log("회원가입 성공");
    } 
  }


  return(
    <div className="Wrapper">
      <form className="SignupForm" onSubmit={handleSubmit}>
        <div className="TitleBoard">
            <h1 className="Title">Signup</h1>
        </div>
        
        <AuthInput
          onChange={onChange} 
          text="닉네임을 입력하세요" 
          type="text" 
          value={userName}
          error={errors.userName}
          name="userName"
        />

        <AuthInput
          onChange={onChange} 
          text="이메일을 입력하세요" 
          type="email" 
          value={email}
          error={errors.email}
          name="email"
        />

        <AuthInput
          onChange={onChange} 
          text="비밀번호를 입력하세요" 
          type="password"
          value={password}
          error={errors.password}
          name="password"
        />

        <AuthInput
          onChange={onChange} 
          text="비밀번호 확인" 
          type="password"
          value={passwordConfirm}
          error={errors.passwordConfirm}
          name="passwordConfirm"
        />
        <div>
          <button className="SignupButton">회원가입</button>
          {modalOpen && <SignupModal setModalOpen={setModalOpen} />}
        </div>
        
      </form>
      <div className="Switcher">
        <Link to={"/login"}>로그인하러가기</Link>
      </div>
    </div>
  )
}

export default SignupPage;