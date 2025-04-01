type UserRole = 'user' | 'admin';
type UserStatus = 'active' | 'inactive';

interface User {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
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
}
