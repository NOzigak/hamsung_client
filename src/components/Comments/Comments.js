import "./Comments.css";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import getReplies from "../../utils/getReplies";
import { addComment } from "../../actions/commentActions";
import CommentForm from "./CommentForm";

const Comments = ({currentUserId, boardId}) => {

    //const [backendComments, setBackendComments] = useState([]);
    //const [activeComment, setActiveComment] = useState(null); // {type : "editing" id: "1"}

    const comments = useSelector(state => state.comments);
    console.log(comments);
    const dispatch = useDispatch();

    const submitComment = (boardId, text) => {
        dispatch(addComment(boardId, text));
    }

    //const getReplies = (commentId) => {
        //return comments.filter(comment => comment.parentId === commentId)
        //.sort(
            //(a, b) => 
            //new Date(a.insertDate).getTime() - new Date(b.insertDate).getTime()
            //);
    //};

    //useEffect(()=>{
        //getCommentsApi().then(data => {
            //setBackendComments(data);
        //})
    //})

    return (
        <div className="commentWrapper">
            {comments.map(rootComment => (
                <div key={`${rootComment.boardId}-${rootComment.id}`}>
                    <Comment 
                        comment={rootComment} 
                        replies={getReplies(comments, rootComment.id)}
                        onSubmit={submitComment}
                    />                                   
                </div>
            ))}
            <CommentForm onSubmit={submitComment} id={boardId}/>
        </div>
    )
}

export default Comments;