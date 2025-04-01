import AuthAPI from './collections/auth.api';
import UserAPI from './collections/user.api';

const API = {
  auth: new AuthAPI(),
  user: new UserAPI(),
};

export default API;
