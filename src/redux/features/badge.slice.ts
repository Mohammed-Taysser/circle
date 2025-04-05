import API from '../../api';
import CRUDSlice from '../crud.slice';

class BadgeSlice extends CRUDSlice<
  Badge,
  BadgeEditablePayload,
  BadgeEditablePayload,
  TablePagination
> {
  constructor() {
    super('badges', API.badge);
  }
}

const badgeSlice = new BadgeSlice();
export default badgeSlice;
