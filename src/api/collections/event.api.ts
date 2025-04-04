import CRUDAPI from '../config/crud.api';

class UserEventAPI extends CRUDAPI<
  UserEvent,
  UserEventEditablePayload,
  UserEventEditablePayload
> {
  constructor() {
    super('events');
  }
}

export default UserEventAPI;
