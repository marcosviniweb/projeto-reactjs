import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';
import { User } from '../models/User';

export function DataTable(props) {
  const filteredUsers = props.users.filter((user) =>
    user.firstName.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    loadUsers();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.firstName}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>{user.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
