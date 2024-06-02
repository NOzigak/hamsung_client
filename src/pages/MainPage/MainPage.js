import BoardList from "../../components/BoardList/BoardList";
import { CardList } from "../../components/CardList/CardList";
import { Navbar } from "../../components/Navbar/Navbar";
import "./MainPage.css";

const MainPage = () =>{

  const mockData = [
    {
        id : 1,
        category : "프로그래밍",
        writer : "홍길동",
        title : "랙트고",
        place : "서울",
        isRecruit : 1,
        created_at : new Date("2024-06-01").getTime(),
        view : 45,
        likeCnt : 21

    },
    {
        id : 2,
        category : "어학",
        writer : "아무개1",
        title : "지각하지 말자",
        place : "서울",
        isRecruit : 0,
        created_at : new Date("2024-06-02").getTime(),
        view : 44,
        likeCnt : 20
    },
    {
        id : 3,
        category : "고시",
        writer : "홍길동",
        title : "노지각",
        place : "서울",
        isRecruit : 1,
        created_at : new Date("2024-06-01").getTime(),
        view : 43,
        likeCnt : 12,
    },
  ]

    return(
        <div>
          <Navbar />
          <div className="popular_study">
            <div className="top_study">
              <h2>인기스터디</h2>
            </div>
            <CardList data={mockData}/>
          </div>
          <div className="boardList">
            <BoardList />
          </div>
        </div>
    )
}

export default MainPage;