import { v4 as uuidv4 } from "uuid";

const ADD_COMMENT = 'ADD_COMMENT';
//const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const ADD_REPLY = 'ADD_REPLY';
//const EDIT_REPLY = 'EDIT_REPLY';
const DELETE_REPLY = 'DELETE_REPLY';

export const addComment = (props) => ({
    type: ADD_COMMENT,
    payload: {
        id: uuidv4(),
        boardId: props.boardId,
        userId: "1108", // 로그인 구현 후 정보 대체
        username: "sungkyun",
        text: props.text,
        insertDate: new Date().getTime(),
        replies:[]
    }
})

export const addReply = (reply) => ({
    type: ADD_REPLY,
    payload: {
        userId: "1108", // 로그인 구현 후 유저 정보 대체
        username: "sungkyun",
        text: reply.text,
        insertDate: new Date().getDate(),
        parentId: reply.parentId,
    }
})

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: {
        id,
    }
})

export const deleteReply = (parentId, id) => ({
    type: DELETE_REPLY,
    payload: {
        parentId,
        id,
    }
})