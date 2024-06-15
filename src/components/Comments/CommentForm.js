import { useState } from "react";
import BoardBtn from "../BoardBtn/BoardBtn";
import "./CommentForm.css";

const CommentForm = ({onSubmit, id}) => {
    const [text, setText] = useState();
    const handleText = (e) => {
        setText(e.target.value);
    }
    const cleanArea = () => {
        setText("");
    }

    return (
        <div className="commentUpload">
            <textarea className="commentInput" onChange={handleText} value={text}></textarea>
            <BoardBtn title="등록하기" onClick={()=>{
               onSubmit(id, text);
               cleanArea();
            }}/>                     
        </div>
    )
}
export default CommentForm;