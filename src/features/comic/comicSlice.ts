import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Comic, ComicLiked } from '../../app/ComicInterface';
import { fetchComic, likeComic } from './comicAPI';

const initialState: Comic = {
  id: -1,
  title: '',
  description: '',
  price: 0.0,
  thumbnail: '',
  date: '',
  liked: false,
  type: 'marvel'
};

export const fetchComicAsync = createAsyncThunk(
  'comic/fetchComic',
  async (params: any) => {
    const response = await fetchComic(params);
    return response.data;
  }
);

export const likeComicAsync = createAsyncThunk(
  'comic/likeComic',
  async (comicLike: ComicLiked) => {
    const response = await likeComic(comicLike);
    return response.data;
  }
);

export const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComicAsync.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.title = action.payload.title;
        state.description = action.payload.description;
      })
      .addCase(likeComicAsync.pending, (state) => {
        state.liked = !state.liked;
      })
      .addCase(likeComicAsync.fulfilled, (state, action) => {
        state.liked = action.payload.liked;
      });
  },
});

export const selectComic = (state: RootState) => state.comic;

export default comicSlice.reducer;
