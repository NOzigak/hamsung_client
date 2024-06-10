const CREATE_BOARD = "BOARD/CREATE";
const UPDATE_BOARD = "BOARD/UPDATE";
const DELETE_BOARD = "BOARD/DELETE";

let id = 4;
export const createBoard = (props) => ({
    type: CREATE_BOARD,
    payload: {
        id : id++,
        created_at: new Date().getTime(),
        category: props.category,
        writer: "노성균", // 유저 닉네임 정보를 가져와야 함
        title: props.title,
        description: props.description,
        place: props.place,
        isrecruit:1,
        view:0,
        capacity: props.capacity,
    }
})

export const updateBoard = (id, created_at, category, title, description, place, isRecruit, view) => ({
    type: UPDATE_BOARD,
    payload: {
        id, created_at, category, writer:"노성균", title, description, place, isRecruit, view
    }
})

export const deleteBoard = (id) => ({
    type:DELETE_BOARD,
    payload: {
        id,
    }
})