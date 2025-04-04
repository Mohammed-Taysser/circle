import AuthAPI from './collections/auth.api';
import UserEventAPI from './collections/event.api';
import GroupAPI from './collections/group.api';
import SubscriptionAPI from './collections/subscription.api';
import UserAPI from './collections/user.api';

const API = {
  auth: new AuthAPI(),
  user: new UserAPI(),
  subscription: new SubscriptionAPI(),
  group: new GroupAPI(),
  event: new UserEventAPI(),
};

export default API;
