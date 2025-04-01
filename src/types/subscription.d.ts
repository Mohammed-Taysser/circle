interface Subscription extends BaseEntity {
  email: string;
  isVerified: boolean;
}

interface SubscriptionFormFields {
  isVerified: boolean;
  email: string;
}

interface SubscriptionUpdatePayload {
  email: string;
  isVerified: boolean;
}

interface SubscriptionCreatePayload {
  email: string;
}
