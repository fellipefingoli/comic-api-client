import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Comic, ComicList, ComicLiked } from '../../app/ComicInterface';
import { fetchComicList, likeComic } from './comicListAPI';

const initialState: ComicList = {
  comics: []
};

export const fetchComicListAsync = createAsyncThunk(
  'comics/fetchComics',
  async (params: any) => {
    const response = await fetchComicList(params);
    return response.data;
  }
);

export const likeComicAsync = createAsyncThunk(
  'comics/likeComic',
  async (comicLike: ComicLiked) => {
    const response = await likeComic(comicLike);
    return response.data;
  }
);

export const comicListSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComicListAsync.fulfilled, (state, action) => {
        state.comics = [
          ...state.comics,
          ...action.payload
        ]
      })
      .addCase(likeComicAsync.fulfilled, (state, action) => {
        const comic = state.comics.find((comic) => comic.id === action.payload.id);
        if(!!comic)
          comic.liked = action.payload.liked;
      });
  },
});

export const selectComicList = (state: RootState) => state.comicList;

export default comicListSlice.reducer;
