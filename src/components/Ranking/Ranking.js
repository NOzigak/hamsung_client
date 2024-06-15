import RankItem from "./RankItem";
import "./Ranking.css";


const Ranking = () => {

    const rankMock = [
        {
            rank : "2",
            studyName : "스터디1",
            category : "프로그래밍",
            score : "3500",
        },
        {
            rank : "3",
            studyName : "스터디2",
            category : "어학",
            score : "3200",
        },
        {
            rank : "4",
            studyName : "스터디3",
            category : "프로그래밍",
            score : "3100",
        },
        {
            rank : "1",
            studyName : "스터디4",
            category : "취업",
            score : "5100",
        }
    ]
    // 백엔드에서 순위 정렬을 처리해준다면 삭제할 코드
    const rankData = rankMock.sort((a, b) => b.score - a.score);

    return (
        <div className="rankWrapper">
            <div className="rankTop"/>
            <div className="rankRow">
                <div className="rankHeaderBasic">순위</div>
                <div className="rankHeaderTitle">스터디 이름</div>
                <div className="rankHeaderBasic">종류</div>
                <div className="rankHeaderBasic">점수</div>
            </div>
            {rankData.map((item)=><RankItem key={item.id} {...item} />)}

        </div>
    )
}

export default Ranking;