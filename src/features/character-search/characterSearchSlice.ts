import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState: any = {
  value: ''
};

export const characterSearchSlice = createSlice({
  name: 'character-search',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  },
});

export const { changeText } = characterSearchSlice.actions;

export const selectCharacterSearch = (state: RootState) => state.characterSearch;

export default characterSearchSlice.reducer;
