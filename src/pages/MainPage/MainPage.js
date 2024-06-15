import BoardList from "../../components/BoardList/BoardList";
import { CardList } from "../../components/CardList/CardList";
import { Navbar } from "../../components/Navbar/Navbar";
import "./MainPage.css";
import {useSelector} from "react-redux";

const MainPage = () =>{


  const boardData = useSelector(state => state.boards);

    return(
        <div>
          <Navbar />
          <div className="popular_study">
            <div className="top_study">
              <h2>인기스터디</h2>
            </div>
            <CardList data={boardData}/>
          </div>
          <div className="boardList">
            <BoardList />
          </div>
        </div>
    )
}

export default MainPage;