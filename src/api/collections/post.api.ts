import CRUDAPI from '../config/crud.api';

class PostAPI extends CRUDAPI<Post, PostEditablePayload, PostEditablePayload> {
  constructor() {
    super('posts');
  }

  // update(id: string | number, payload: PostEditablePayload) {
  //   return this.axiosInstance.patchForm<AxiosResponse<Post>>(
  //     `${this.endpoint}/${id}/`,
  //     payload,
  //   );
  // }

  // create(payload: PostEditablePayload) {
  //   return this.axiosInstance.postForm<AxiosResponse<Post>>(
  //     `${this.endpoint}/`,
  //     payload,
  //   );
  // }
}

export default PostAPI;
