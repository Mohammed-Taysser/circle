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
  ThunkDispatch,
  UnknownAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import CRUDAPI from '../api/config/crud.api';
import { getErrorMessage } from '../helpers';
import { CrudRootState } from '../hooks/useRedux';

// Define the structure of the CRUD state
interface CRUDState<T, FilterParams> {
  items: T[]; // Array of items fetched from the API
  selectedItem: T | null; // Currently selected item
  simpleItems: SimpleResponse[]; // Array of items fetched from the API
  loading: {
    // States for loading flags for each action
    fetch: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
    fetchById: boolean;
    fetchSimple: boolean;
  };
  error: ReactNode | null; // Error message if any
  filters: FilterParams; // Filter parameters
}

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

interface Actions<
  T extends BaseEntity,
  CreatePayload,
  UpdatePayload,
  FilterParams,
> {
  fetchAll: AsyncThunk<AxiosPaginatedResponse<T>, void, AsyncThunkConfig>;
  fetchById: AsyncThunk<T, string | number, AsyncThunkConfig>;
  create: AsyncThunk<
    AxiosResponse<T>,
    { payload: CreatePayload; params?: Partial<FilterParams> },
    AsyncThunkConfig
  >;
  update: AsyncThunk<
    AxiosResponse<T>,
    { id: T['_id']; payload: UpdatePayload; params?: Partial<FilterParams> },
    AsyncThunkConfig
  >;
  delete: AsyncThunk<
    AxiosResponse<T>,
    { id: T['_id']; params?: Partial<FilterParams> },
    AsyncThunkConfig
  >;
  fetchSimpleList: AsyncThunk<
    AxiosResponse<SimpleResponse[]>,
    void,
    AsyncThunkConfig
  >;
  changePage: AsyncThunk<void, number, AsyncThunkConfig>;
  changeLimit: AsyncThunk<void, number, AsyncThunkConfig>;
}

// The CRUDSlice class provides methods for performing CRUD operations
class CRUDSlice<
  T extends BaseEntity,
  CreatePayload,
  UpdatePayload,
  FilterParams extends TablePagination,
> {
  name: keyof CrudRootState;
  api: CRUDAPI<T, CreatePayload, UpdatePayload, FilterParams>;
  state: CRUDState<T, FilterParams>;
  slice: Slice;
  actions: Actions<T, CreatePayload, UpdatePayload, FilterParams>;
  reducer: Reducer<CRUDState<T, FilterParams>>;

  constructor(
    name: keyof CrudRootState,
    api: CRUDAPI<T, CreatePayload, UpdatePayload>,
    initialState: Partial<CRUDState<T, FilterParams>> = {},
  ) {
    this.name = name;
    this.api = api;
    this.state = this.getInitialState(initialState);
    this.actions = this.createThunks();
    this.slice = this.createSlice();
    this.reducer = this.slice.reducer;
  }

  protected getInitialState(
    initialState: Partial<CRUDState<T, FilterParams>>,
  ): CRUDState<T, FilterParams> {
    return {
      items: [],
      selectedItem: null,
      simpleItems: [],
      loading: {
        fetch: false,
        create: false,
        update: false,
        delete: false,
        fetchById: false,
        fetchSimple: false,
        ...initialState.loading,
      },
      error: null,
      filters: {
        page: 1,
        limit: 25,
        total: 0,
        ...initialState.filters,
      } as FilterParams,
      ...initialState, // Only applies to flat properties
    };
  }

  private createThunks(): Actions<
    T,
    CreatePayload,
    UpdatePayload,
    FilterParams
  > {
    return {
      fetchAll: this.createFetchAllThunk(),
      fetchById: this.createFetchByIdThunk(),
      create: this.createCreateThunk(),
      update: this.createUpdateThunk(),
      delete: this.createDeleteThunk(),
      fetchSimpleList: this.createFetchSimpleListThunk(),
      changePage: createAsyncThunk(
        `${this.name}/change-page`,
        async (page: number, thunkApi) => {
          thunkApi.dispatch(this.slice.actions.setFilter({ page }));
          thunkApi.dispatch(this.actions.fetchAll());
        },
      ),
      changeLimit: createAsyncThunk(
        `${this.name}/change-limit`,
        async (limit: number, thunkApi) => {
          thunkApi.dispatch(this.slice.actions.setFilter({ page: 1, limit }));
          thunkApi.dispatch(this.actions.fetchAll());
        },
      ),
    };
  }

  protected createFetchAllThunk() {
    return createAsyncThunk(`${this.name}/fetch-all`, async (_, thunkApi) => {
      try {
        const rootState = thunkApi.getState() as CrudRootState;
        const currentState = rootState[this.name];

        const response = await this.api.getAll(
          currentState.filters as FilterParams,
        );
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(getErrorMessage(error));
      }
    });
  }

  protected createFetchByIdThunk() {
    return createAsyncThunk(
      `${this.name}/fetch-by-id`,
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
      async (
        payload: { payload: CreatePayload; params?: Partial<FilterParams> },
        thunkApi,
      ) => {
        try {
          const response = await this.api.create(
            payload.payload,
            payload.params,
          );

          thunkApi.dispatch(this.slice.actions.setFilter({ page: 1 }));

          thunkApi.dispatch(this.actions.fetchAll());

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
        {
          id,
          payload,
          params,
        }: {
          id: T['_id'];
          payload: UpdatePayload;
          params?: Partial<FilterParams>;
        },
        thunkApi,
      ) => {
        try {
          const response = await this.api.update(id, payload, params);

          thunkApi.dispatch(this.slice.actions.setFilter({ page: 1 }));
          thunkApi.dispatch(this.actions.fetchAll());

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
      async (
        { id, params }: { id: T['_id']; params?: Partial<FilterParams> },
        thunkApi,
      ) => {
        try {
          const response = await this.api.delete(id, params);

          thunkApi.dispatch(this.slice.actions.setFilter({ page: 1 }));
          thunkApi.dispatch(this.actions.fetchAll());

          return response.data;
        } catch (error) {
          return thunkApi.rejectWithValue(getErrorMessage(error));
        }
      },
    );
  }

  protected createFetchSimpleListThunk() {
    return createAsyncThunk(
      `${this.name}/fetch-simple-list`,
      async (_, thunkApi) => {
        try {
          const response = await this.api.getSimpleList();
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
    | ValidateSliceCaseReducers<
        CRUDState<T, FilterParams>,
        SliceCaseReducers<CRUDState<T, FilterParams>>
      >
    | ((
        creators: ReducerCreators<CRUDState<T, FilterParams>>,
      ) => SliceCaseReducers<CRUDState<T, FilterParams>>) {
    return {
      setSelectedItem: (state, action: PayloadAction<T>) => {
        state.selectedItem = action.payload as Draft<T>;
      },
      clearSelectedItem: (state) => {
        state.selectedItem = null;
      },

      setFilter: (
        state: Draft<CRUDState<T, FilterParams>>,
        action: PayloadAction<Partial<FilterParams>>,
      ) => {
        state.filters = {
          ...state.filters,
          ...action.payload,
        };
      },
    };
  }

  // Define extraReducers to handle async actions
  protected addExtraReducers(
    builder: ActionReducerMapBuilder<CRUDState<T, FilterParams>>,
  ) {
    builder
      // Fetch all items
      .addCase(this.actions.fetchAll.pending, (state) => {
        state.loading.fetch = true;
        state.error = null;
      })
      .addCase(this.actions.fetchAll.fulfilled, (state, action) => {
        state.loading.fetch = false;
        state.items = action.payload.data as Draft<T>[];
        state.filters = { ...state.filters, ...action.payload.meta };
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
      })
      .addCase(this.actions.create.rejected, (state, action) => {
        state.loading.create = false;
        state.error = action.payload as string;
      })

      // Update item
      .addCase(this.actions.update.pending, (state) => {
        state.loading.update = true;
        state.error = null;
      })
      .addCase(this.actions.update.fulfilled, (state) => {
        state.loading.update = false;
      })
      .addCase(this.actions.update.rejected, (state, action) => {
        state.loading.update = false;
        state.error = action.payload as string;
      })

      // Delete item
      .addCase(this.actions.delete.pending, (state) => {
        state.loading.delete = true;
        state.error = null;
      })
      .addCase(this.actions.delete.fulfilled, (state, action) => {
        state.loading.delete = false;
      })
      .addCase(this.actions.delete.rejected, (state, action) => {
        state.loading.delete = false;
        state.error = action.payload as string;
      })

      .addCase(this.actions.fetchSimpleList.pending, (state) => {
        state.loading.fetchSimple = true;
        state.error = null;
      })
      .addCase(this.actions.fetchSimpleList.fulfilled, (state, action) => {
        state.loading.fetchSimple = false;
        state.simpleItems = action.payload.data;
      })
      .addCase(this.actions.fetchSimpleList.rejected, (state, action) => {
        state.loading.fetchSimple = false;
        state.error = action.payload as string;
      });
  }
}

export default CRUDSlice;
