import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";
import CommentReducer from "./CommentReducer";
import NoticeReducer from "./NoticeReducer";

const RootReducer = combineReducers({
    boards : BoardReducer,
    comments : CommentReducer,
    notice : NoticeReducer,
})

export default RootReducer;