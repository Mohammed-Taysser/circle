import API from '../../api';
import CRUDSlice from '../crud.slice';

class UserSlice extends CRUDSlice<User, UserCreatePayload, UserUpdatePayload> {
  constructor() {
    super('users', API.user);
  }
}

const userSlice = new UserSlice();
export default userSlice;
