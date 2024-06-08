import "./RankItem.css";

const RankItem = ({rank, studyName, category, score}) => {
    return (
        <div>
            <div className="rankItem">
                <div className="rank">
                    {rank}
                </div>
                <div className="rankStudyName">
                    {studyName}
                </div>
                <div className="rank">
                    {category}
                </div>
                <div className="rank">
                    {score}
                </div> 
            </div>
        </div>
    )
}

export default RankItem;