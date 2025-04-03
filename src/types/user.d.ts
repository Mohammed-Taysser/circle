type UserRole = 'user' | 'admin';
type UserStatus = 'active' | 'inactive';

interface User extends BaseEntity {
  username: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  avatar: string;
  cover: string;
  email: string;
  status: UserStatus;
  isVerified: boolean;
  isDeleted: boolean;
  badges: Badge[];
  bookmarks: [];
  passwordChangeAt: string;
}

interface UserFormFields {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  status: UserStatus;
  isVerified: boolean;
  role: UserRole;
  password: string;
  cover?: File;
  avatar?: File;
}

interface UserCreatePayload {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  status: UserStatus;
  isVerified: boolean;
  role: UserRole;
  password: string;
  cover?: File;
  avatar?: File;
}

interface UserUpdatePayload {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  status: UserStatus;
  isVerified: boolean;
  role: UserRole;
  avatar?: File;
  cover?: File;
}
