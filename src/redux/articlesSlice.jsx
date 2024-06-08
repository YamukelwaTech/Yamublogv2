import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
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
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    loading: true,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    removeArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.token !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
    });
  },
});

export const { setArticles, removeArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
