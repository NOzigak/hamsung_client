
import "./PostCard.css";
import { CardWrapper } from "./styles";

export const PostCard = ({title, writer, created_at, view, category}) => {

    return (
        <CardWrapper category={category}>

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