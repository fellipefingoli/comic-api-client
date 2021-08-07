import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import comicReducer from '../features/comic/comicSlice';

export const store = configureStore({
  reducer: {
    comic: comicReducer
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
