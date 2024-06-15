import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";
import CommentReducer from "./CommentReducer";

const RootReducer = combineReducers({
    boards : BoardReducer,
    comments : CommentReducer,
})

export default RootReducer;