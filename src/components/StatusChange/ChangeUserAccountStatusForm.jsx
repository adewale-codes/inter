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
    <div className="change-user-account-status-form flex flex-col items-center justify-center p-5">
      <h2>Change User Account Status</h2>
      <form className="flex text-white flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className=" p-2 rounded"
            placeholder="Account Number"
            value={userAccountNumber}
            onChange={(e) => setUserAccountNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className=" p-2 rounded"
            placeholder="New Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            className=" p-2 rounded"
            placeholder="Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex">
          <button className="bg-bblue py-2 flex items-center px-10 rounded" type="submit">Change Status</button>
        </div>
      </form>
    </div>
  );
};

export default ChangeUserAccountStatusForm;
