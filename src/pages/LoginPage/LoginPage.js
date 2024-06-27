import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  console.log(auth);
  const handleData = (e) => {
    if(e.target.type === "email"){
      setEmail(e.target.value);
    } else if(e.target.type === "password"){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // login action
    dispatch(login({email, password}));
  }
  
  // 로그인시 토큰 정보를 로컬 스토리지에 저장.
  useEffect(() => {
    if(auth.user){
      nav('/');
      try {
        localStorage.setItem('token', JSON.stringify(auth.user));
      } catch(e){
        console.log("localStorage is not working");
      }
    }
  }, [nav, auth.user])

  return(
    <div className="LoginWrapper">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="TitleBoard">
            <h1 className="Title">Login</h1>
        </div>
        <input className="Email" placeholder="이메일을 입력하세요" type="email" value={email} onChange={handleData} required/>
        <input className="Password" placeholder="비밀번호를 입력하세요" type="password" value={password} onChange={handleData} required/>
        {auth.error && auth.error}
        <button className="LoginButton">로그인</button>
      </form>
      <div className="Switcher">
        <Link to={"/signup"}>회원가입</Link>
      </div>
    </div>
  )
}

export default LoginPage;