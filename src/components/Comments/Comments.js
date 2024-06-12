import "./Comments.css";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import getReplies from "../../utils/getReplies";

const Comments = ({currentUserId}) => {

    //const [backendComments, setBackendComments] = useState([]);
    //const [activeComment, setActiveComment] = useState(null); // {type : "editing" id: "1"}

    const comments = useSelector(state => state.comments);

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
                    />                                   
                </div>
            ))}
        </div>
    )
}

export default Comments;