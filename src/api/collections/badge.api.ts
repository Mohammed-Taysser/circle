import CRUDAPI from '../config/crud.api';

class BadgeAPI extends CRUDAPI<
  Badge,
  BadgeEditablePayload,
  BadgeEditablePayload
> {
  constructor() {
    super('badges');
  }

  update(id: string | number, payload: BadgeEditablePayload) {
    return this.axiosInstance.patchForm<AxiosResponse<Badge>>(
      `${this.endpoint}/${id}/`,
      payload,
    );
  }

  create(payload: BadgeEditablePayload) {
    return this.axiosInstance.postForm<AxiosResponse<Badge>>(
      `${this.endpoint}/`,
      payload,
    );
  }
}

export default BadgeAPI;
