import React, { useState } from 'react';
import { api } from '../../services/api';

const ChangeTransactionStatusForm = () => {
  const [formData, setFormData] = useState({
    statusNumber: '',
    transactionId: '',
    adminPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.changeTransactionStatus(formData);
      alert('Transaction status changed successfully!');
      // Reset form data
      setFormData({
        statusNumber: '',
        transactionId: '',
        adminPassword: ''
      });
    } catch (error) {
      console.error('Error changing transaction status:', error);
      alert('Error changing transaction status. Please try again.');
    }
  };

  return (
    <div className="change-transaction-status-form">
      <h2>Change Transaction Status</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Status Number:</label>
          <input
            type="text"
            name="statusNumber"
            value={formData.statusNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Transaction ID:</label>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Admin Password:</label>
          <input
            type="password"
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Change Status</button>
      </form>
    </div>
  );
};

export default ChangeTransactionStatusForm;
