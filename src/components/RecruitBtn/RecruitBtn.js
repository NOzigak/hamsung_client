import "./RecruitBtn.css";

const RecruitBtn = ({text, onClick}) => {
    return (
        <button className="recruitBtn" onClick={onClick}>{text}</button>
    )
}

export default RecruitBtn;