import { GET_ARTICLES, SET_ARTICLE, TOGGLE_MODAL } from '../actions/types';

const initialState = {
  isMobile: window.innerWidth < 769,
  showModal: false,
  articles: [],
  article: null
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };
    default:
      return state;
  }
};

export default articleReducer;
