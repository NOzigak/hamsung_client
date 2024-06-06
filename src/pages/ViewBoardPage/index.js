import BoardBtn from "../../components/BoardBtn/BoardBtn";
import { Navbar } from "../../components/Navbar/Navbar";
import Viewer from "../../components/Viewer/Viewer";
import "./style.css";

const ViewBoardPage = ({}) => {
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
    

    console.log(viewMock)
    return(
        <div>
            <Navbar />
            <div className="detailWrapper">
                <div className="detailTitle">
                    {viewMock.title}
                </div>

                <div>
                    <Viewer
                        leader = {viewMock.leader}
                        created_at = {viewMock.created_at}
                        place = {viewMock.place}
                        description = {viewMock.description}
                    />
                </div>
                <div className="writeBtn">
                    <BoardBtn title="모집중" /> {/* 모집 상태는 작성자만 바꿀수 있음 */}
                    <BoardBtn title="신청자 리스트" />
                    <BoardBtn title="수정하기" />
                    <BoardBtn title="삭제하기" />
                </div>
                <div className="readBtn">
                    <BoardBtn title="신청하기"/> {/* 신청하기 버튼은 열람자에게만 보임 */}
                </div>
            </div>
        </div>
    )
}

export default ViewBoardPage;