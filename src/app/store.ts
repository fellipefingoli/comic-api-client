import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import comicListReducer from '../features/comic-list/comicListSlice';

export const store = configureStore({
  reducer: {
    comicList: comicListReducer
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
