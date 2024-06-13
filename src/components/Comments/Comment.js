import { useState } from "react";
import BoardBtn from "../BoardBtn/BoardBtn";
import "./Comment.css";
import { useDispatch } from "react-redux";
import { addReply } from "../../actions/commentActions";


const Comment = ({comment, replies, onSubmit, currentUserId}) => {

    //const canEdit = currentUserId === comment.userId
    const [activeComment, setActiveComment] = useState(null); // {type : "editing" id: "1"}
    const [text, setText] = useState();
    const isReplying = activeComment &&
        activeComment.type === "replying" &&
        activeComment.id === comment.id;
    const dispatch = useDispatch();

    const handleText = (e) => {
        setText(e.target.value);
    }
    
    const onReply = () => {
        setActiveComment({type : "replying", id: comment.id});
        if(isReplying){
            setActiveComment({type : "", id:""});
        }
    };
    const commentSubmit = () => {
        onSubmit(comment.id, text);
    }
    const replySubmit = () => {
        dispatch(addReply(text, comment.id))

        // reply 구분 기능 구현..
    }

    return (
        <div className="commentWrapper">
            <div>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <p className="insertDate">{new Date(comment.insertDate).toLocaleString()}</p>                
            </div>
            <div className="replyBtn">
                {!comment.parentId && <BoardBtn title="답글" onClick={onReply}/>}
                
            </div>
            {isReplying && (
                <div className="commentUpload">
                    <textarea className="commentInput" onChange={handleText}></textarea>
                    <BoardBtn title="등록하기" onClick={replySubmit}/>                     
                </div>
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