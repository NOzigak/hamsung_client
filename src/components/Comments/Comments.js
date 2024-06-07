import { useEffect, useState } from "react";
import BoardBtn from "../BoardBtn/BoardBtn";
import "./Comments.css";
import Comment from "./Comment";

const Comments = ({currentUserId}) => {

    //const [backendComments, setBackendComments] = useState([]);
    const backendComments = [
        {
            id : "1",
            userId : "21",
            username : "user1",
            text: "first comment",
            insertDate : "2024.05.13 12:45",
            parentId : null,
        },
        {
            id : "2",
            userId : "12",
            username : "user2",
            text : "first comment first reply",
            insertDate : "2024.05.13 22:32",
            parentId: "1",
        },
        {
            id : "3",
            userId : "33",
            username : "user3",
            text : "second comment",
            insertDate : "2024.05.14 12:30",
            parentId: null,
        }
    ]
    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId)
        .sort(
            (a, b) => 
            new Date(a.insertDate).getTime() - new Date(b.insertDate).getTime()
            );
    };
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    //useEffect(()=>{
        //getCommentsApi().then(data => {
            //setBackendComments(data);
        //})
    //})
    
    return (
        <div className="commentWrapper">
            {rootComments.map(rootComment => (
                <div key={rootComment.id}>
                    <Comment comment={rootComment} replies={getReplies(rootComment.id)}/>                                   
                </div>
            ))}
        </div>
    )
}

export default Comments;