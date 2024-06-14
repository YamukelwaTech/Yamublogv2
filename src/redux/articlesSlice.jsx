import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log(`${backendUrl}`);

// Async thunk for fetching all articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
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
    } catch (error) {
      console.error("Error fetching articles:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching a single post by token
export const fetchPost = createAsyncThunk(
  "articles/fetchPost",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendUrl}/posts/${token}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with token ${token}:`, error);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for adding a comment to a post
export const addComment = createAsyncThunk(
  "articles/addComment",
  async ({ token, comment }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${backendUrl}/posts/${token}/comments`,
        comment
      );
      const { data } = response;
      dispatch(resetCommentAdded());
      return { token, comment: data };
    } catch (error) {
      console.error(`Error adding comment to post ${token}:`, error);
      return rejectWithValue(error.message);
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    loading: true,
    logged: false,
    error: null,
    commentAdded: false,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.token !== action.payload
      );
    },
    setArticlesLogged: (state) => {
      state.logged = true;
    },
    resetCommentAdded: (state) => {
      state.commentAdded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch articles.";
      })
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.article = action.payload;
        state.article.comments = state.article.comments || [];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch post.";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { token, comment } = action.payload;
        const articleIndex = state.articles.findIndex(
          (article) => article.token === token
        );
        if (articleIndex !== -1) {
          state.articles[articleIndex].comments.push(comment);
        }
        state.commentAdded = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload || "Failed to add comment.";
      });
  },
});

export const {
  setArticles,
  removeArticle,
  setArticlesLogged,
  resetCommentAdded,
} = articlesSlice.actions;

export default articlesSlice.reducer;
