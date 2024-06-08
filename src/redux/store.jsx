import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarSlice";
import articlesReducer from "./articlesSlice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    articles: articlesReducer,
  },
});

export default store;
