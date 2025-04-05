interface Review extends BaseEntity {
  body: string;
  user: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  event: string;
  rate: number;
}

interface ReviewFormFields {
  rate: number;
  body: string;
  event: string;
  user: string;
}

interface ReviewCreatePayload {
  rate: number;
  body: string;
  event: string;
  user: string;
}

interface ReviewUpdatePayload {
  rate: number;
  body: string;
}

interface ReviewFilterParams extends TablePagination {
  event?: string;
}
