import API from '../../api';
import CRUDSlice from '../crud.slice';

class PostSlice extends CRUDSlice<
  Post,
  PostEditablePayload,
  PostEditablePayload,
  TablePagination
> {
  constructor() {
    super('posts', API.post);
  }
}

const postSlice = new PostSlice();
export default postSlice;
