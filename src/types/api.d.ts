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

type AxiosSimpleResponse = Array<{
  id: number;
  name: string;
}>;

interface AxiosPaginatedResponse<T> {
  data: T[];
  meta: TablePagination;
}

// Auth
interface AxiosRefreshTokenResponse {
  access: string;
}
