import { v4 as uuidv4 } from "uuid"; // 백엔드 연결 전 게시물 고유 id 부여를 위해 사용

const CREATE_BOARD = "BOARD/CREATE";
const UPDATE_BOARD = "BOARD/UPDATE";
const DELETE_BOARD = "BOARD/DELETE";


export const createBoard = (props) => ({
    type: CREATE_BOARD,
    payload: {
        id : uuidv4(), //고유한 id 생성
        created_at: new Date().getTime(),
        category: props.category,
        writer: "노성균", // 유저 닉네임 정보를 가져와야 함
        title: props.title,
        description: props.description,
        place: props.place,
        isRecruit: true,
        view:0,
        capacity: props.capacity,
    }
})

export const updateBoard = (props) => ({
    type: UPDATE_BOARD,
    payload: {
        id: props.id,
        created_at: props.created_at,
        category:props.category,
        writer:"노성균",
        title: props.title,
        description: props.description,
        place: props.place,
        isRecruit:props.isRecruit,
        view: props.view
    }
})

export const deleteBoard = (id) => ({
    type:DELETE_BOARD,
    payload: {
        id,
    }
})
