interface UserEvent extends BaseEntity {
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  price: number;
  title: string;
  body: string;
  startDate: string;
  endDate: string;
  allDay: boolean;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  attendees: []; // TODO: Add type
  color: string;
  rate: number;
  rateCount: number;
}

interface UserEventFormFields {
  user: string;
  coordinates: LatLng;
  price: number;
  title: string;
  body: string;
  startDate: Dayjs | string;
  endDate: Dayjs | string;
  allDay: boolean;
  color: string;
}

interface UserEventEditablePayload {
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
  price: number;
  title: string;
  body: string;
  startDate: string;
  endDate: string;
  allDay: boolean;
  color: string;
  user: string;
}
