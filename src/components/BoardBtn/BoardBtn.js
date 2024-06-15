import "./BoardBtn.css";


const BoardBtn = ({title, onClick}) => {
    return (
        <div>
            <button className="boardBtn" onClick={() => onClick()}>{title}</button>
        </div>
    )
}

export default BoardBtn;