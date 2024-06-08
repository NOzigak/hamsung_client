import { Navbar } from "../../components/Navbar/Navbar";
import Ranking from "../../components/Ranking/Ranking";
import "./RankPage.css";

const RankPage = () => {
    return(
        <div className="rankWrapper">
            <Navbar />
            <div className="rankTitle">
                <p>스터디 랭킹</p>
            </div>
            <div>
                <Ranking />                
            </div>

        </div>
    )
}

export default RankPage;