import React from 'react';

export function DataTable(props) {
  const filteredUsers = props.users.filter((user) => {
    switch (props.searchQuery.filter) {
      case 'firstName':
        return user.firstName
          .toLowerCase()
          .includes(props.searchQuery.query.toLowerCase());
      case 'lastName':
        return user.lastName
          .toLowerCase()
          .includes(props.searchQuery.query.toLowerCase());
      case 'age':
        return user.age.toString().includes(props.searchQuery.query);
      case 'gender':
        return user.gender
          .toLowerCase()
          .includes(props.searchQuery.query.toLowerCase());
      default:
        return true;
    }
  });

  if (filteredUsers.length === 0) {
    return <p>Nenhum usuário encontrado.</p>;
  }

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
