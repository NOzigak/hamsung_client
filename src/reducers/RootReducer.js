import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";
import CommentReducer from "./CommentReducer";
import AuthReducer from "./AuthReducer";

const RootReducer = combineReducers({
    boards : BoardReducer,
    comments : CommentReducer,
    auth: AuthReducer,
})

export default RootReducer;