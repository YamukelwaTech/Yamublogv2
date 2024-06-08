import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(`${backendUrl}/posts`);
    const generateRandomPublishTime = () => {
      const start = new Date(2020, 0, 1).getTime();
      const end = new Date().getTime();
      const randomTime = new Date(start + Math.random() * (end - start));
      return randomTime.toISOString();
    };
    const generateRandomReadTime = () => {
      return Math.floor(Math.random() * 35) + 1;
    };
    return response.data.map((article) => ({
      ...article,
      publishedDate: generateRandomPublishTime(),
      readTime: generateRandomReadTime(),
    }));
  }
);

export const fetchPost = createAsyncThunk(
  "articles/fetchPost",
  async (token) => {
    const response = await axios.get(`${backendUrl}/posts/${token}`);
    return response.data;
  }
);

export const addComment = createAsyncThunk(
  "articles/addComment",
  async ({ token, comment }) => {
    const response = await axios.post(
      `${backendUrl}/posts/${token}/comments`,
      comment
    );
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    loading: true,
    logged: false,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.token !== action.payload
      );
    },
    setArticlesLogged: (state) => {
      state.logged = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.article = action.payload;
      state.loading = false;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      const { token, comment } = action.payload;
      const articleIndex = state.articles.findIndex(
        (article) => article.token === token
      );
      if (articleIndex !== -1) {
        state.articles[articleIndex].comments.push(comment);
      }
    });
  },
});

export const { setArticles, removeArticle, setArticlesLogged } =
  articlesSlice.actions;

export default articlesSlice.reducer;
