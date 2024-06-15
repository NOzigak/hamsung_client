import "./Viewer.css";


const Viewer = ({leader, created_at, place, description}) => {
    return (
        <div className="viewer">
            <div className="viewInfo">
                <p>작성자 : {leader}</p>
                <p>Date : {new Date(created_at).toLocaleDateString()}</p>
                <p>장소 : {place}</p>
            </div>
            <div className="descSection">
                <pre>{description}</pre>
            </div>
        </div>
    )
}

export default Viewer;
