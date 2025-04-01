import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import routes from '../../core/Routes';
import LOCAL_STORAGE from '../../core/localStorage';
import { getErrorMessage } from '../../helpers';
import { notifications } from '@mantine/notifications';
import { ReactNode } from 'react';
import API from '../../api';

const login = createAsyncThunk(
  'auth/login',
  async (body: LoginRequestBody, thunkApi) => {
    try {
      const response = await API.auth.login(body);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

const register = createAsyncThunk(
  'auth/register',
  async (body: RegisterRequestBody, thunkApi) => {
    try {
      const response = await API.auth.register(body);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

const initialState: RequestState<User> = {
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

      routes.navigate('/join-us');
    },
  },
  extraReducers: (builder) => {
    builder

      // login
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.user;

        LOCAL_STORAGE.set('token', action.payload.token);
        LOCAL_STORAGE.set('user', action.payload.user);

        notifications.show({
          title: 'Successfully login',
          message: `Welcome back, ${action.payload.user.firstName}`,
          loading: false,
          color: '',
          autoClose: true,
        });

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
      })

      // register
      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.user;

        LOCAL_STORAGE.set('token', action.payload.token);
        LOCAL_STORAGE.set('user', action.payload.user);

        notifications.show({
          title: 'Successfully register',
          message: `Welcome to Circle, ${action.payload.user.firstName}`,
          loading: false,
          color: '',
          autoClose: true,
        });

        routes.navigate('/');
      })
      .addCase(register.rejected, (state, action) => {
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
export { login, register };
