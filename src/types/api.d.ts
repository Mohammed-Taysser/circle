interface ApiNormalError {
  detail: string;
  error?:
    | string
    | {
        message: string;
      };
}

interface ApiValidationError {
  [key: string]: string;
}

type ResponseError = ApiNormalError | ApiValidationError;

interface TablePagination {
  page: number;
  limit: number;
  total: number;
}

interface BaseEntity {
  _id: string | number;
  createdAt: string;
  updatedAt: string;
}

type AxiosSimpleResponse = Array<{
  id: number;
  name: string;
}>;

interface AxiosPaginatedResponse<T> {
  data: T[];
  meta: TablePagination;
}

interface AxiosResponse<T extends BaseEntity> {
  data: T;
}

// Auth
interface AxiosRefreshTokenResponse {
  access: string;
}
