import { useState } from "react";
import BoardBtn from "../BoardBtn/BoardBtn";
import "./Comment.css";
import CommentForm from "./CommentForm";


const Comment = ({comment, replies, currentUserId}) => {

    //const canEdit = currentUserId === comment.userId
    const [activeComment, setActiveComment] = useState(null); // {type : "editing" id: "1"}
    const isReplying = activeComment &&
        activeComment.type === "replying" &&
        activeComment.id === comment.id;
    
    const onReply = () => {
        setActiveComment({type : "replying", id: comment.id})
        if(isReplying){
            setActiveComment({type : "", id:""})
        }
    }

    return (
        <div className="commentWrapper">
            <div>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <p className="insertDate">{comment.insertDate}</p>                
            </div>
            <div className="replyBtn">
                <BoardBtn title="답글" onClick={onReply}/>
            </div>
            {isReplying && (
                <CommentForm />
            )}
            {replies.length > 0 && (
                <div className="replies">
                    {replies.map(reply => (
                        <div className="replyWrapper" key={reply.id ? `${reply.id}-${reply.parentId}` : Math.random().toString()}>
                            <Comment key={reply.id} comment={reply} replies={[]}/>                            
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
};

export default Comment;