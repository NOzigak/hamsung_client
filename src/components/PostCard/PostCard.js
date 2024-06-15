
import { useNavigate } from "react-router-dom";
import "./PostCard.css";
import { CardWrapper } from "./styles";

export const PostCard = ({id, title, writer, created_at, view, category}) => {

    const nav = useNavigate();

    return (
        <CardWrapper category={category} onClick={()=>nav(`/viewBoard/${id}`)}>

            <div className="cardInfo">
                <div className="cardTitle">
                    {title}
                </div>
                <div className="cardWriter">
                    {writer}
                </div>
                <div className="dateWrapper">
                    <div className="cardDate">
                        Date : {new Date(created_at).toLocaleDateString()}
                    </div>
                    <div className="cardView">
                        조회수 : {view}
                    </div>                    
                </div>

            </div>

        </ CardWrapper>
    )


}