import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';
import CRUDSlice from '../crud.slice';
import { CrudRootState } from '../../hooks/useRedux';
import { getErrorMessage } from '../../helpers';

class ReviewSlice extends CRUDSlice<
  Review,
  ReviewCreatePayload,
  ReviewUpdatePayload,
  ReviewFilterParams
> {
  constructor() {
    super('reviews', API.review);
  }

  protected createFetchAllThunk() {
    return createAsyncThunk(`${this.name}/fetch-all`, async (_, thunkApi) => {
      try {
        const rootState = thunkApi.getState() as CrudRootState;
        const currentState = rootState[this.name];

        if (!(currentState.filters as ReviewFilterParams).event) {
          throw new Error('event not found');
        }

        const response = await this.api.getAll(currentState.filters);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(getErrorMessage(error));
      }
    });
  }
}

const eventSlice = new ReviewSlice();
export default eventSlice;
