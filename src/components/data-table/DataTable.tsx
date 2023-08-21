import React from 'react';
import './DataTable.scss';

export function DataTable(props) {
  const filters = {
    firstName: (user, query) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()),
    lastName: (user, query) =>
      user.lastName.toLowerCase().includes(query.toLowerCase()),
    age: (user, query) => user.age.toString().includes(query),
    gender: (user, query) =>
      user.gender.toLowerCase().includes(query.toLowerCase()),
  };

  const filterFunction = filters[props.searchQuery.filter] || (() => true);

  const filteredUsers = props.users.filter((user) =>
    filterFunction(user, props.searchQuery.query)
  );

  if (filteredUsers.length === 0) {
    return <p>Nenhum usuário encontrado.</p>;
  }

  return (
    <table className="table table-striped">
      <thead className="dataTable-container">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user, index) => (
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
