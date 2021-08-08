import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User, UserRequest, UserLogin } from '../../app/UserInterface';
import { createUser, loginUser, logoutUser } from './userAPI';

const initialState: User = {
  email: '',
  logged: false
};

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (params: UserRequest) => {
    const response = await createUser(params);
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (params: UserLogin) => {
    const response = await loginUser(params);
    return response.data;
  }
);

export const logoutUserAsync = createAsyncThunk(
  'user/logoutUser',
  async () => {
    const response = await logoutUser();
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.email = action.payload.user.email;
        state.logged = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.logged = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.email = '';
        state.logged = false;
      })
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
