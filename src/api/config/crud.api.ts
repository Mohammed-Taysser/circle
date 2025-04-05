import AxiosAPI from './axios.api';

abstract class CRUDAPI<
  T extends BaseEntity,
  CreatePayload,
  UpdatePayload,
  FilterParams extends Partial<TablePagination> = Partial<TablePagination>,
> extends AxiosAPI {
  protected endpoint: string;

  constructor(endpoint: string) {
    super();
    this.endpoint = endpoint;
  }

  getAll(params?: Partial<FilterParams>) {
    return this.axiosInstance.get<AxiosPaginatedResponse<T>>(
      `${this.endpoint}/`,
      { params },
    );
  }

  getSimpleList(params?: Partial<FilterParams>) {
    return this.axiosInstance.get<AxiosResponse<SimpleResponse[]>>(
      `${this.endpoint}/`,
      {
        params: {
          ...params,
          simple: true,
        },
      },
    );
  }

  getById(id: string | number, params?: Partial<FilterParams>) {
    return this.axiosInstance.get<AxiosResponse<T>>(`${this.endpoint}/${id}/`);
  }

  export(params?: Partial<FilterParams>) {
    return this.axiosInstance.get<Blob>(`${this.endpoint}/export/`, {
      params,
      responseType: 'blob',
    });
  }

  create(payload: CreatePayload, params?: Partial<FilterParams>) {
    return this.axiosInstance.post<AxiosResponse<T>>(
      `${this.endpoint}/`,
      payload,
    );
  }

  update(
    id: string | number,
    payload: UpdatePayload,
    params?: Partial<FilterParams>,
  ) {
    return this.axiosInstance.patch<AxiosResponse<T>>(
      `${this.endpoint}/${id}/`,
      payload,
    );
  }

  delete(id: string | number, params?: Partial<FilterParams>) {
    return this.axiosInstance.delete<AxiosResponse<T>>(
      `${this.endpoint}/${id}/`,
    );
  }
}

export default CRUDAPI;
