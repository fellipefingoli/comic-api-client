import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User, UserResponse, UserRequest, UserLogin } from '../../app/UserInterface';
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
  async (params: User) => {
    const response = await logoutUser(params);
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
        state.email = action.payload.email;
        state.logged = action.payload.logged;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.logged = action.payload.logged;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.logged = action.payload.logged;
      })
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
