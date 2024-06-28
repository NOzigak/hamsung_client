import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import icon from "./../../assets/hamsungIcon.png";
import menu from "./../../assets/menu.png";
import { useState } from "react";

export const Navbar = ({user}) => {
    const nav = useNavigate();
    const onCLickLogin = () => {
        nav("/login");
    }
    const [isOpen, setIsOpen] = useState(false);
    const onClickToggle = () => {
        setIsOpen(!isOpen); // 토글 상태 변경
    };

    return (
        <div className="navbarWrapper">
            <img className="hamsungIcon" src={icon} alt="icon"/>

            <div className="linkSection">
                <ul className={`menuList ${isOpen ? 'show' : ''}`}>
                    <NavLink to="/">
                        <li>메인페이지</li>
                    </NavLink>
                    <NavLink to="/mypage">
                        <li>마이페이지</li>
                    </NavLink>
                    <NavLink to="/rank">
                        <li>랭킹</li>
                    </NavLink>                    
                </ul>
            </div>
            <div className={`navBtnSection ${isOpen ? 'show' : ''}`}>
                {user ? <button className="logoutBtn">로그아웃</button> :
                    <button className="logoutBtn" onClick={onCLickLogin}>로그인</button>
                }
            </div>
            <img className="toggleBtn" src={menu} onClick={onClickToggle}></img>
        </div>
    )
}