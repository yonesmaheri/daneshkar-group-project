export type UserRole = 'admin' | 'member'

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password: string;
};