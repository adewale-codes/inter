import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

const UserDetailPage = () => {
  const { userAccountNumber } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.singleUserData(userAccountNumber);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userAccountNumber]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail-page">
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email Address:</strong> {user.emailAddress}</p>
      <p><strong>First Name:</strong> {user.firstname}</p>
      <p><strong>Last Name:</strong> {user.lastname}</p>
      <p><strong>Account Number:</strong> {user.accountNumber}</p>
      <p><strong>Last Access Time:</strong> {user.lastAccessTime}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Account Status:</strong> {user.accountStatus}</p>
    </div>
  );
};

export default UserDetailPage;
