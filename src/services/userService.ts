import { User } from '../models/User';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://dummyjson.com/users');

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  const data: { users: User[] } = await response.json();
  return data.users;
};
