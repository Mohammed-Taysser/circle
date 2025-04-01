import AxiosAPI from './axios.api';

abstract class CRUDAPI<
  T,
  CreatePayload,
  UpdatePayload,
  FilterParams extends Partial<TablePagination> = Partial<TablePagination>,
> extends AxiosAPI {
  protected endpoint: string;

  constructor(endpoint: string) {
    super();
    this.endpoint = endpoint;
  }

  getAll(params?: FilterParams) {
    return this.axiosInstance.get<AxiosPaginatedResponse<T>>(
      `${this.endpoint}/`,
      { params },
    );
  }

  getSimpleList(params?: FilterParams) {
    return this.axiosInstance.get<AxiosSimpleResponse>(`${this.endpoint}/`, {
      params: {
        ...params,
        simple: true,
      },
    });
  }

  getById(id: string | number) {
    return this.axiosInstance.get<T>(`${this.endpoint}/${id}/`);
  }

  export(params?: FilterParams) {
    return this.axiosInstance.get<Blob>(`${this.endpoint}/export/`, {
      params,
      responseType: 'blob',
    });
  }

  create(payload: CreatePayload) {
    return this.axiosInstance.post<T>(`${this.endpoint}/`, payload);
  }

  update(id: string | number, payload: UpdatePayload) {
    return this.axiosInstance.put<T>(`${this.endpoint}/${id}/`, payload);
  }

  delete(id: string | number) {
    return this.axiosInstance.delete<void>(`${this.endpoint}/${id}/`);
  }
}

export default CRUDAPI;
