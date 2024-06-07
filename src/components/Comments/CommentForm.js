import BoardBtn from "../BoardBtn/BoardBtn";
import "./CommentForm.css";

const CommentForm = () => {
    return (
        <div className="commentUpload">
            <textarea className="commentInput"></textarea>
            <BoardBtn title="등록하기"/>                     
        </div>
    )
}
export default CommentForm;