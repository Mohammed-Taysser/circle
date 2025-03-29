import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from '../../core/Routes';
import API from '../../core/api';
import LOCAL_STORAGE from '../../core/localStorage';
import { getErrorMessage } from '../../helpers';
import { notifications } from '@mantine/notifications';
import { ReactNode } from 'react';

const login = createAsyncThunk(
  'auth/login',
  async (body: LoginRequestBody, thunkApi) => {
    try {
      const response = await API.login(body);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  }
);

const initialState: RequestState<AuthUser> = {
  data: LOCAL_STORAGE.get('user'),
  status: 'idle',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;

      LOCAL_STORAGE.remove('token');
      LOCAL_STORAGE.remove('user');

      routes.navigate('/login');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.user;
        
        LOCAL_STORAGE.set('token', action.payload.token);
        LOCAL_STORAGE.set('user', action.payload.user);

        routes.navigate('/');
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;

        notifications.show({
          title: 'Error',
          message: action.payload as ReactNode,
          loading: false,
          withCloseButton: true,
          autoClose: true,
          color: 'red',
        });
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export { login };
