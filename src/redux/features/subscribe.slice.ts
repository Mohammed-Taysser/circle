import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../core/api';
import LOCAL_STORAGE from '../../core/localStorage';
import { getErrorMessage } from '../../helpers';

const addSubscription = createAsyncThunk(
  'subscribe/add-subscription',
  async (email: string, thunkApi) => {
    try {
      const response = await API.subscribe(email);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(getErrorMessage(error));
    }
  }
);

const initialState: RequestState<Subscribe> = {
  data: LOCAL_STORAGE.get('subscribe'),
  status: 'idle',
  error: '',
};

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSubscription.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addSubscription.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        LOCAL_STORAGE.set('subscribe', action.payload);
      })
      .addCase(addSubscription.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default subscribeSlice.reducer;
export { addSubscription };
