import API from '../../api';
import CRUDSlice from '../crud.slice';

class UserEventSlice extends CRUDSlice<
  UserEvent,
  UserEventEditablePayload,
  UserEventEditablePayload,
  TablePagination
> {
  constructor() {
    super('events', API.event);
  }
}

const eventSlice = new UserEventSlice();
export default eventSlice;
