import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

const TransactionDetail = () => {
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await api.singleTransaction(transactionId);
        setTransaction(response.data);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchTransactionData();
  }, [transactionId]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div className="transaction-detail-page">
      <h2>Transaction Details</h2>
      <p><strong>User Account Number:</strong> {transaction.userAccountNumber}</p>
      <p><strong>Amount:</strong> {transaction.amount}</p>
      <p><strong>Transaction Type:</strong> {transaction.transactionType}</p>
      <p><strong>Status:</strong> {transaction.status}</p>
      <p><strong>Transaction Date:</strong> {transaction.transactionDate}</p>
      <p><strong>Status Date:</strong> {transaction.statusDate}</p>
      <p><strong>Transaction ID:</strong> {transaction.transactionId}</p>
    </div>
  );
};

export default TransactionDetail;
