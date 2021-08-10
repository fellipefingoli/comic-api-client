import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterSearchSlice from '../features/character-search/characterSearchSlice';
import comicListSlice from '../features/comic-list/comicListSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    comicList: comicListSlice,
    user: userSlice,
    characterSearch: characterSearchSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
