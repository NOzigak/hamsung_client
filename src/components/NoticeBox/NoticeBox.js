import { useState } from "react";
import "./NoticeBox.css";
import { useNavigate } from "react-router-dom";
import plus from "../../assets/plus.png";



export default function NoticeBox() {
    const nav = useNavigate(); 
    const mockData = [
        {
            id : 1,
            title : "<필독> 함성 면접 스터디 기본 규칙 설명",
            created_at: "2024.04.21"

        },
        {
            id : 2,
            title : "스터디 장소 및 5월 스터디 일정 안내합니다.",
            created_at : "2024.04.30"
        },
        
    ]

  return (
    <div className="noticeBox">
        <p className="notice">공지사항</p>
        <button className="more-button" onClick={()=>nav("/noticeList")}>
            <img className="plus" src={plus} />
        </button>
        {mockData.map((item) => (
                <div key={item.id} className="noticeItem" onClick={()=>nav(`/notice`)}>
                    <div className="noticeContent">
                         <p className="notice-title">{item.title}</p>
                         <p className="notice-date">{item.created_at}</p>
                     </div>
                </div>
        ))}

    </div>

  );
}