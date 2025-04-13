import React from 'react';
import '../styles/TransactionsList.css';

const TransactionsList = ({ transactions }) => {
  return (
    <table className="transactions-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount (Ksh)</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t, index) => (
          <tr key={index}>
            <td>{t.date}</td>
            <td>{t.description}</td>
            <td>{t.amount}</td>
            <td>{t.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
