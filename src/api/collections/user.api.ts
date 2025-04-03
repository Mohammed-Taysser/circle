import CRUDAPI from '../config/crud.api';

class UserAPI extends CRUDAPI<User, UserCreatePayload, UserUpdatePayload> {
  constructor() {
    super('users');
  }

  update(id: string | number, payload: UserUpdatePayload) {
    return this.axiosInstance.patchForm<AxiosResponse<User>>(
      `${this.endpoint}/${id}/`,
      payload,
    );
  }

  create(payload: UserCreatePayload) {
    return this.axiosInstance.postForm<AxiosResponse<User>>(
      `${this.endpoint}/`,
      payload,
    );
  }
}

export default UserAPI;
