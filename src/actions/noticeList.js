import { v4 as uuidv4 } from "uuid";

const CREATE_NOTICE = "NOTICE/CREATE";
const UPDATE_NOTICE = "NOTICE/UPDATE";
const DELETE_NOTICE = "NOTICE/DELETE";

export const createNotice = (props) => ({
    type: CREATE_NOTICE,
    payload: {
        id: uuidv4(), 
        created_at: new Date().getTime(),
        writer: "노성균", 
        title: props.title,
        description: props.description,
    }
})

export const updateNotice = (props) => ({
    type: UPDATE_NOTICE,
    payload: {
        id: props.id,
        created_at: props.created_at,
        writer:"노성균",
        title: props.title,
        description: props.description,
    }
})

export const deleteNotice = (id) => ({
    type: DELETE_NOTICE,
    payload: {
        id,
    }
})
