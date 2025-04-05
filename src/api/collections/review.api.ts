import { AxiosResponse } from 'axios';
import CRUDAPI from '../config/crud.api';

class ReviewAPI extends CRUDAPI<
  Review,
  ReviewCreatePayload,
  ReviewUpdatePayload,
  ReviewFilterParams
> {
  private readonly parentEndpoint = 'events/';

  constructor() {
    super('reviews');
  }

  private getBaseURL(params: ReviewFilterParams) {
    return `${this.parentEndpoint}${params.event}/${this.endpoint}/`;
  }

  getAll(params: ReviewFilterParams) {
    return this.axiosInstance.get<AxiosPaginatedResponse<Review>>(
      this.getBaseURL(params),
      { params },
    );
  }

  getById(id: string | number, params: ReviewFilterParams) {
    return this.axiosInstance.get<AxiosResponse<Review>>(
      `${this.getBaseURL(params)}${id}/`,
    );
  }

  create(payload: ReviewCreatePayload, params: ReviewFilterParams) {
    return this.axiosInstance.post<AxiosResponse<Review>>(
      this.getBaseURL(params),
      payload,
    );
  }

  update(
    id: string | number,
    payload: ReviewUpdatePayload,
    params: ReviewFilterParams,
  ) {
    return this.axiosInstance.patch<AxiosResponse<Review>>(
      `${this.getBaseURL(params)}${id}/`,
      payload,
    );
  }

  delete(id: string | number, params: ReviewFilterParams) {
    return this.axiosInstance.delete<AxiosResponse<Review>>(
      `${this.getBaseURL(params)}${id}/`,
    );
  }
}

export default ReviewAPI;
