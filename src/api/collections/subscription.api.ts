import CRUDAPI from '../config/crud.api';

class SubscriptionAPI extends CRUDAPI<
  Subscription,
  SubscriptionCreatePayload,
  SubscriptionUpdatePayload
> {
  constructor() {
    super('subscription');
  }
}

export default SubscriptionAPI;
