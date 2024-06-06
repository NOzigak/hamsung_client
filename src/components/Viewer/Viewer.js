import "./Viewer.css";


const Viewer = ({leader, created_at, place, description}) => {
    return (
        <div className="viewer">
            <div className="viewInfo">
                <p>작성자 : {leader}</p>
                <p>Date : {created_at}</p>
                <p>장소 : {place}</p>
            </div>
            <div className="descSection">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Viewer;
