import React, { useState } from 'react';
import { api } from '../../services/api';

const ChangeUserAccountStatusForm = () => {
  const [userAccountNumber, setUserAccountNumber] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.changeUserAccountStatus({
        userAccountNumber,
        newStatus,
        adminPassword
      });
      alert('User account status changed successfully!');
      // Reset form data
      setUserAccountNumber('');
      setNewStatus('');
      setAdminPassword('');
    } catch (error) {
      console.error('Error changing user account status:', error);
      alert('Error changing user account status. Please try again.');
    }
  };

  return (
    <div className="change-user-account-status-form">
      <h2>Change User Account Status</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Account Number:</label>
          <input
            type="text"
            value={userAccountNumber}
            onChange={(e) => setUserAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Status:</label>
          <input
            type="text"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Admin Password:</label>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Status</button>
      </form>
    </div>
  );
};

export default ChangeUserAccountStatusForm;
