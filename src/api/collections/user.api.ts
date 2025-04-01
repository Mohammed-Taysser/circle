import CRUDAPI from '../config/crud.api';

class UserAPI extends CRUDAPI<User, Partial<UserFormFields>, UserFormFields> {
  constructor() {
    super('users');
  }

  update(id: string | number, payload: Partial<UserFormFields>) {
    return this.axiosInstance.patchForm<AxiosResponse<User>>(
      `${this.endpoint}/${id}/`,
      payload,
    );
  }

  create(payload: UserFormFields) {
    return this.axiosInstance.postForm<AxiosResponse<User>>(
      `${this.endpoint}/`,
      payload,
    );
  }
}

export default UserAPI;
