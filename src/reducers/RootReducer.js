import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";
import CommentReducer from "./CommentReducer";
import NoticeReducer from "./NoticeReducer";
import AuthReducer from "./AuthReducer";


const RootReducer = combineReducers({
    boards : BoardReducer,
    comments : CommentReducer,
    notice : NoticeReducer,
    auth: AuthReducer,

})

export default RootReducer;