import { Link } from "react-router-dom";
import "./SignupPage.css";
import { useEffect, useState } from "react";
import { validateUser } from "../../utils/validate";
import AuthInput from "../../components/AuthInput/AuthInput";
import SignupModal from "../../components/SignupModal/SignupModal";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
    //console.log(formData)
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
    const validationErrors = validateUser(formData)
    setErrors(validationErrors)
    console.log(Object.keys(errors).length)
    console.log(Object.keys(formData.email).length)
    // login hook
    if(Object.keys(errors).length === 0 && Object.keys(formData.email).length !== 0
      && Object.keys(formData.userName).length !== 0 && Object.keys(formData.password).length !== 0
    ){
      showModal()
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
        <Link to={"/"}>로그인하러가기</Link>
      </div>
    </div>
  )
}

export default SignupPage;