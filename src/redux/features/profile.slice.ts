import { notifications } from '@mantine/notifications';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import API from '../../api';
import { getErrorMessage } from '../../helpers';

const getUserById = createAsyncThunk(
  'users/get-user-by-id',
  async (id: string, thunkApi) => {
    try {
      const response = await API.user.getById(id);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  },
);

const initialState: RequestState<User> = {
  data: null,
  status: 'idle',
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getUserById.pending, (state) => {
        state.status = 'loading';
        state.data = null;
        state.error = '';
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;

        notifications.show({
          title: 'Error',
          message: action.payload as ReactNode,

          color: 'red',
        });
      });
  },
});

export default profileSlice.reducer;
export { getUserById };
