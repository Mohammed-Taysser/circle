type GroupVisibility = 'private' | 'public' | 'friends';

interface Group extends BaseEntity {
  visibility: GroupVisibility;
  name: string;
  avatar: string;
  cover: string;
  badges: {
    _id: string;
    earnAt: string;
    badge: Badge;
  }[];
}

interface GroupFormFields {
  name: string;
  avatar?: File;
  cover?: File;
  visibility: GroupVisibility;
}

interface GroupEditablePayload {
  name: string;
  avatar?: File;
  cover?: File;
  visibility: GroupVisibility;
}
