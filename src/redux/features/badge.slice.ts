import API from '../../api';
import CRUDSlice from '../crud.slice';

class BadgeSlice extends CRUDSlice<
  Badge,
  BadgeEditablePayload,
  BadgeEditablePayload
> {
  constructor() {
    super('badges', API.badge);
  }
}

const badgeSlice = new BadgeSlice();
export default badgeSlice;
