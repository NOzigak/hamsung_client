import BoardBtn from "../BoardBtn/BoardBtn";
import "./Comment.css";


const Comment = ({comment, replies}) => {

    return (
        <div className="commentWrapper">
            <div>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <p className="insertDate">{comment.insertDate}</p>                
            </div>
            <div className="replyBtn">
                <BoardBtn title="댓글"/>
            </div>
            {replies.length > 0 && (
                <div className="replies">
                    {replies.map(reply => (
                        <div className="replyWrapper">
                            <Comment key={reply.id} comment={reply} replies={[]}/>                            
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
};

export default Comment;