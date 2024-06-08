import axios from "axios";
import { GET_ARTICLES, SET_ARTICLE } from "./types";

export const getArticles = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts`
    );
    dispatch({
      type: GET_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

export const setArticle = (article) => {
  return {
    type: SET_ARTICLE,
    payload: article,
  };
};

// export const toggleModal = () => {
//   return {
//     type: TOGGLE_MODAL,
//   };
// };
