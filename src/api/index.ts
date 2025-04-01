import AuthAPI from './collections/auth.api';
import SubscriptionAPI from './collections/subscription.api';
import UserAPI from './collections/user.api';

const API = {
  auth: new AuthAPI(),
  user: new UserAPI(),
  subscription: new SubscriptionAPI(),
};

export default API;
