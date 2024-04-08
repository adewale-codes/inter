import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.listAllTransactions();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-list">
      <h2>List of All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>User Account Number</th>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Status Date</th>
            <th>Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.transactionId}>
              <td>{transaction.userAccountNumber}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transactionType}</td>
              <td>{transaction.status}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.statusDate}</td>
              <td>{transaction.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
