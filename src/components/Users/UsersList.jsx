import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.listAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-list">
      <h2>List of All Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email Address</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Number</th>
            <th>Last Access Time</th>
            <th>Gender</th>
            <th>Account Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.emailAddress}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.accountNumber}</td>
              <td>{user.lastAccessTime}</td>
              <td>{user.gender}</td>
              <td>{user.accountStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
