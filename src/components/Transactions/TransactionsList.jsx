import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.listAllTransactions();
        if (response.data && Array.isArray(response.data.data)) {
          setTransactions(response.data.data); // Access the data property
        } else {
          console.error('Invalid data format received for transactions:', response.data);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setTransactions([]); // Set transactions to an empty array in case of an error
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-list">
      <h2>List of All Transactions</h2>
      <table className="w-full border-collapse border-t border-gray-300">
        <thead>
          <tr className="border-b border-gray-300">
            <th>ID</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.userId}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.status}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
