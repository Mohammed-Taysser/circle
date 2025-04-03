import CRUDAPI from '../config/crud.api';

class GroupAPI extends CRUDAPI<
  Group,
  GroupEditablePayload,
  GroupEditablePayload
> {
  constructor() {
    super('groups');
  }

  update(id: string | number, payload: GroupEditablePayload) {
    return this.axiosInstance.patchForm<AxiosResponse<Group>>(
      `${this.endpoint}/${id}/`,
      payload,
    );
  }

  create(payload: GroupEditablePayload) {
    return this.axiosInstance.postForm<AxiosResponse<Group>>(
      `${this.endpoint}/`,
      payload,
    );
  }
}

export default GroupAPI;
