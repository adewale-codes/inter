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
    <div className="change-transaction-status-form flex flex-col items-center justify-center p-5">
      <h2>Change Transaction Status</h2>
      <form className="flex text-white flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className=" p-2 rounded"
            placeholder="Status number"
            name="statusNumber"
            value={formData.statusNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className=" p-2 rounded"
            placeholder="Transaction ID"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            className=" p-2 rounded"
            placeholder="Password"
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
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

export default ChangeTransactionStatusForm;
