import { NavLink } from "react-router-dom";
import "./Navbar.css";
import icon from "./../../assets/hamsungIcon.png";

export const Navbar = () => {
    return (
        <div className="navbarWrapper">
            <img className="hamsungIcon" src={icon} alt="icon"/>

            <div className="linkSection">
                <ul>
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
            <div className="btnSection">
                <button className="logoutBtn">로그아웃</button>
            </div>
        </div>
    )
}