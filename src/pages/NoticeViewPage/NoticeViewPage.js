import CommentForm from "../../components/Comments/CommentForm";
import Comments from "../../components/Comments/Comments";
import { Navbar } from "../../components/Navbar/Navbar";
import Viewer from "../../components/Viewer/Viewer";
import "../../pages/ViewBoardPage/style.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const NoticeViewPage = () => {
    const { id } = useParams();
    const mockData = [
        {
            id : 1,
            writer: "노성균",
            title : "<필독> 함성 면접 스터디 기본 규칙 설명",
            place : "서울",
            created_at: "2024.04.21",
            description: "공지사항 내용"

        },
        {
            id : 2,
            writer: "노성균",
            title : "스터디 장소 및 5월 스터디 일정 안내합니다.",
            place : "서울",
            created_at : "2024.04.30",
            description: "공지사항 내용"
        },
        {
            id : 3,
            writer: "노성균",
            title : "스터디 요일 및 장소 투표",
            place : "서울",
            created_at : "2024.04.19",
            description: "공지사항 내용"
        },
        {
            id : 4,
            writer: "노성균",
            title : "1주차 스터디는 비대면으로 진행됩니다.",
            place : "서울",
            created_at : "2024.04.13",
            description: "공지사항 내용"
        }
        
    ]

    const nav = useNavigate();

    
    return(
        <div>
            <Navbar />

                {mockData.map((item) => (
                  <div className="detailWrapper">
                     <div className="detailTitle">
                         {item.title}
                     </div>
                  
                     <div>
                           <Viewer
                             leader = {item.writer}
                             created_at = {item.created_at}
                             description = {item.description}  
                             place = {item.place}
                           />
                     </div>
                    </div>
                ))}


                <div className="comments">
                    <Comments />
                    <CommentForm />
                </div>
        </div>
    )
}

export default NoticeViewPage;