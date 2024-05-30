import BoardList from "../../components/BoardList/BoardList";

const MainPage = () =>{
    return(
        <div>
          <div className="popular_study">
            <h2>인기스터디</h2>
          </div>
          <div className="boardList">
            <BoardList />
          </div>
        </div>
    )
}

export default MainPage;