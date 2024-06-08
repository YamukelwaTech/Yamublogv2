import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Import redux-thunk
import rootReducer from "./reducers"; // Import your root reducer

const initialState = {
  isMobile: window.innerWidth < 769,
  showModal: false,
  articles: [],
  article: null,
};

const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
