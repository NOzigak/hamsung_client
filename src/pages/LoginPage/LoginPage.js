import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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