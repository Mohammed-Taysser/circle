import API from '../../api';
import CRUDSlice from '../crud.slice';

class SubscriptionSlice extends CRUDSlice<
  Subscription,
  SubscriptionCreatePayload,
  SubscriptionUpdatePayload,
  TablePagination
> {
  constructor() {
    super('subscriptions', API.subscription);
  }
}

const subscriptionSlice = new SubscriptionSlice();
export default subscriptionSlice;
