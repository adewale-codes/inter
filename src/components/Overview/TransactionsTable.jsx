import React from 'react';

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
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

export default TransactionsTable;
