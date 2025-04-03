import API from '../../api';
import CRUDSlice from '../crud.slice';

class GroupSlice extends CRUDSlice<
  Group,
  GroupEditablePayload,
  GroupEditablePayload
> {
  constructor() {
    super('groups', API.group);
  }
}

const groupSlice = new GroupSlice();
export default groupSlice;
