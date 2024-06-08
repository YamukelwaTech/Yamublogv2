import { combineReducers } from "redux";
import articleReducer from "./articleReducer"; 

const rootReducer = combineReducers({
  articleState: articleReducer,
});

export default rootReducer;
