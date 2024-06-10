import { useParams } from "react-router-dom";
import BoardBtn from "../../components/BoardBtn/BoardBtn";
import CommentForm from "../../components/Comments/CommentForm";
import Comments from "../../components/Comments/Comments";
import { Navbar } from "../../components/Navbar/Navbar";
import Viewer from "../../components/Viewer/Viewer";
import "./style.css";
import useBoard from "../../hooks/useBoard";

const ViewBoardPage = () => {
    const viewMock = 
        {
            title: "랙트고",
            description: "리액트 심화 스터디 모집합니다. 개인프로젝트를 개발하며 진행할 것입니다.",
            created_at:"2024.06.05",
            place:"서울 중구",
            leader:"노성균",
            likes: 100,
            isRecruit: true,
            category: "프로그래밍",
            view: 1234,
            comments: [
                {
                    comment_user_id: "user1",
                    comment_text: "스터디 커리큘럼은 어떻게 되나요?",
                    comment_product_date: "2024.06.06",
                    comment_correction_date: null, // 수정 날짜
                },
                {
                    comment_user_id: "user2",
                    comment_text: "스터디 세부계획 알려주실수 있나요?",
                    comment_product_date: "2024.06.08",
                    comment_correction_date: null, // 수정 날짜
                }
            ]
        }
    const params = useParams();
    const curBoardItem = useBoard(params.id);
    
    if(!curBoardItem){
        return <div>데이터 로딩중...</div>
    }


    return(
        <div>
            <Navbar />
            <div className="detailWrapper">
                <div className="detailTitle">
                    {curBoardItem.title}
                </div>

                <div>
                    <Viewer
                        leader = {curBoardItem.writer}
                        created_at = {curBoardItem.created_at}
                        place = {curBoardItem.place}
                        description = {curBoardItem.description}
                    />
                </div>
                {/* 작성자만 바꿀수 있음 <아래 이름은 로그인으로 받아온 유저 정보로 바꿀예정>*/}
                {curBoardItem.writer==="노성균" ? 
                    <div className="writeBtn">
                        <BoardBtn title="모집중" /> 
                        <BoardBtn title="신청자 리스트" />
                        <BoardBtn title="수정하기" />
                        <BoardBtn title="삭제하기" />
                    </div> 
                    :
                    <div className="readBtn">
                        <BoardBtn title="신청하기"/> {/* 신청하기 버튼은 열람자에게만 보임 */}
                    </div>                             
                }


                <div className="comments">
                    <Comments />
                    <CommentForm />
                </div>
            </div>
        </div>
    )
}

export default ViewBoardPage;