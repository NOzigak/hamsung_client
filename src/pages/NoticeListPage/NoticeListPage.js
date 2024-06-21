import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./NoticeListPage.css";

const NoticeListPage = () => {

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
        {
            id : 3,
            title : "스터디 요일 및 장소 투표",
            created_at : "2024.04.19"
        },
        {
            id : 4,
            title : "1주차 스터디는 비대면으로 진행됩니다.",
            created_at : "2024.04.13"
        }
        
    ]

    return(
        <div>
          <Navbar />
          <div className="title-container">
             <p className="title">면접 스터디</p>
          </div>
          <div className="outline"></div>

          <div className="noticeList">
             <p className="notice">공지사항</p>
             {mockData.map((item) => (
                 <div key={item.id} className="noticeItem" onClick={()=>nav(`/notice`)}>
                     <div className="noticeContent">
                         <p className="notice-title">{item.title}</p>
                         <p className="notice-date">{item.created_at}</p>
                     </div>
                 </div>
                ))}
           </div>
           <button className="finish-button" onClick={()=>nav("/newNotice")}>새 글 작성</button>

        </div>
    )
};

export default NoticeListPage;