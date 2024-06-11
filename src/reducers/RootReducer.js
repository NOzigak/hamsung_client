import { combineReducers } from "redux";
import BoardReducer from "./BoardReducer";

const RootReducer = combineReducers({
    boards : BoardReducer,
})

export default RootReducer;