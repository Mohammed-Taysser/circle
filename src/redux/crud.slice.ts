import {
  ActionReducerMapBuilder,
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  Draft,
  PayloadAction,
  Reducer,
  ReducerCreators,
  Slice,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { ReactNode } from 'react';
import CRUDAPI from '../api/config/crud.api';
import { getErrorMessage } from '../helpers';
import { RootState } from '../hooks/useRedux';

// Define the structure of the CRUD state
interface CRUDState<T> {
  items: T[]; // Array of items fetched from the API
  selectedItem: T | null; // Currently selected item
  loading: {
    // States for loading flags for each action
    fetch: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
    fetchById: boolean;
  };
  error: ReactNode | null; // Error message if any
  pagination: TablePagination; // Pagination state for API calls
}

interface Actions<T extends BaseEntity, CreatePayload, UpdatePayload> {
  fetchAll: AsyncThunk<
    AxiosPaginatedResponse<T>,
    Partial<TablePagination>,
    AsyncThunkConfig
  >;
  fetchById: AsyncThunk<T, string | number, AsyncThunkConfig>;
  create: AsyncThunk<AxiosResponse<T>, CreatePayload, AsyncThunkConfig>;
  update: AsyncThunk<
    AxiosResponse<T>,
    { id: T['_id']; payload: UpdatePayload },
    AsyncThunkConfig
  >;
  delete: AsyncThunk<AxiosResponse<T>, string | number, AsyncThunkConfig>;
  changePage: AsyncThunk<void, number, AsyncThunkConfig>;
  changeLimit: AsyncThunk<void, number, AsyncThunkConfig>;
}

// The CRUDSlice class provides methods for performing CRUD operations
class CRUDSlice<T extends BaseEntity, CreatePayload, UpdatePayload> {
  name: string;
  api: CRUDAPI<T, CreatePayload, UpdatePayload>;
  state: CRUDState<T>;
  slice: Slice;
  actions: Actions<T, CreatePayload, UpdatePayload>;
  reducer: Reducer<CRUDState<T>>;

  constructor(
    name: string,
    api: CRUDAPI<T, CreatePayload, UpdatePayload>,
    initialState: Partial<CRUDState<T>> = {},
  ) {
    this.name = name;
    this.api = api;
    this.state = this.getInitialState(initialState);
    this.actions = this.createThunks();
    this.slice = this.createSlice();
    this.reducer = this.slice.reducer;
  }

  protected getInitialState(initialState: Partial<CRUDState<T>>): CRUDState<T> {
    return {
      items: [],
      selectedItem: null,
      loading: {
        fetch: false,
        create: false,
        update: false,
        delete: false,
        fetchById: false,
        ...initialState.loading,
      },
      error: null,
      pagination: {
        page: 1,
        limit: 25,
        total: 0,
        ...initialState.pagination,
      },
      ...initialState, // Only applies to flat properties
    };
  }

  private createThunks(): Actions<T, CreatePayload, UpdatePayload> {
    return {
      fetchAll: this.createFetchAllThunk(),
      fetchById: this.createFetchByIdThunk(),
      create: this.createCreateThunk(),
      update: this.createUpdateThunk(),
      delete: this.createDeleteThunk(),
      changePage: createAsyncThunk(
        `${this.name}/changePage`,
        async (page: number, thunkApi) => {
          const state = thunkApi.getState() as RootState;
          const currentLimit = state.subscribe.pagination.limit;
          thunkApi.dispatch(this.slice.actions.setPage(page));
          thunkApi.dispatch(
            this.actions.fetchAll({ page, limit: currentLimit }),
          );
        },
      ),
      changeLimit: createAsyncThunk(
        `${this.name}/changeLimit`,
        async (limit: number, thunkApi) => {
          thunkApi.dispatch(this.slice.actions.setLimit(limit));
          thunkApi.dispatch(this.actions.fetchAll({ page: 1, limit }));
        },
      ),
    };
  }

  protected createFetchAllThunk() {
    return createAsyncThunk(
      `${this.name}/fetchAll`,
      async (params: Partial<TablePagination>, thunkApi) => {
        try {
          const response = await this.api.getAll(params);
          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  protected createFetchByIdThunk() {
    return createAsyncThunk(
      `${this.name}/fetchById`,
      async (id: string | number, thunkApi) => {
        try {
          const response = await this.api.getById(id);
          return response.data.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  protected createCreateThunk() {
    return createAsyncThunk(
      `${this.name}/create`,
      async (payload: CreatePayload, thunkApi) => {
        try {
          const response = await this.api.create(payload);
          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  protected createUpdateThunk() {
    return createAsyncThunk(
      `${this.name}/update`,
      async (
        { id, payload }: { id: T['_id']; payload: UpdatePayload },
        thunkApi,
      ) => {
        try {
          const response = await this.api.update(id, payload);
          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  protected createDeleteThunk() {
    return createAsyncThunk(
      `${this.name}/delete`,
      async (id: T['_id'], thunkApi) => {
        try {
          const response = await this.api.delete(id);
          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  private createSlice() {
    return createSlice({
      name: this.name,
      initialState: this.state,
      reducers: this.reducers(), // Use reducers for custom actions like caching and rollback
      extraReducers: (builder) => this.addExtraReducers(builder),
    });
  }

  private reducers():
    | ValidateSliceCaseReducers<CRUDState<T>, SliceCaseReducers<CRUDState<T>>>
    | ((
        creators: ReducerCreators<CRUDState<T>>,
      ) => SliceCaseReducers<CRUDState<T>>) {
    return {
      setSelectedItem: (state, action: PayloadAction<T>) => {
        state.selectedItem = action.payload as Draft<T>;
      },
      clearSelectedItem: (state) => {
        state.selectedItem = null;
      },

      setPage: (state, action: PayloadAction<number>) => {
        state.pagination.page = action.payload;
      },
      setLimit: (state, action: PayloadAction<number>) => {
        state.pagination.limit = action.payload;
      },
    };
  }

  // Define extraReducers to handle async actions
  protected addExtraReducers(builder: ActionReducerMapBuilder<CRUDState<T>>) {
    builder
      // Fetch all items
      .addCase(this.actions.fetchAll.pending, (state) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(this.actions.fetchAll.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.items = action.payload.data as Draft<T>[];
        state.pagination = action.payload.meta;
      })
      .addCase(this.actions.fetchAll.rejected, (state, action) => {
        state.loading.fetch = false;
        state.error = action.payload as string;
      })

      // Fetch by ID
      .addCase(this.actions.fetchById.pending, (state) => {
        state.loading.fetchById = true;
        state.error = null;
      })
      .addCase(this.actions.fetchById.fulfilled, (state, action) => {
        state.loading.fetchById = false;
        state.selectedItem = action.payload as Draft<T>;
      })
      .addCase(this.actions.fetchById.rejected, (state, action) => {
        state.loading.fetchById = false;
        state.error = action.payload as string;
      })

      // Create item
      .addCase(this.actions.create.pending, (state) => {
        state.loading.create = true;
        state.error = null;
      })
      .addCase(this.actions.create.fulfilled, (state) => {
        state.loading.create = false;

        this.actions.fetchAll({ page: 1, limit: state.pagination.limit });
      })
      .addCase(this.actions.create.rejected, (state, action) => {
        state.loading.create = false;
        state.error = action.payload as string;
      })

      // Update item
      .addCase(this.actions.update.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item._id === action.payload.data._id,
        );
        if (index !== -1) {
          state.items[index] = action.payload.data as Draft<T>;
        }
      })

      // Delete item
      .addCase(this.actions.delete.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item._id === action.payload.data._id,
        );

        if (index !== -1) {
          state.items = state.items
            .slice(0, index)
            .concat(state.items.slice(index + 1));
        }
      });
  }
}

export default CRUDSlice;
