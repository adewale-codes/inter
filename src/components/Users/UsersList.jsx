import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.listAllUsers();
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data); // Access the data property
        } else {
          console.error('Invalid data format received for users:', response.data);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]); // Set users to an empty array in case of an error
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <h2>List of All Users</h2>
      <table className='w-full border-collapse border-t border-gray-300'>
        <thead>
          <tr className='border-b border-gray-300'>
            <th>ID</th>
            <th>Email Address</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Number</th>
            <th>Account Status</th>
            <th>Gender</th>
            <th>Last Access Time</th>
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
              <td>{user.accountStatus}</td>
              <td>{user.gender}</td>
              <td>{user.lastAccessTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
