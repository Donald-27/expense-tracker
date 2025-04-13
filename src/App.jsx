// src/App.jsx
import React, { useState, useEffect } from 'react';
import ExpenseEntryForm from './components/ExpenseEntryForm';
import TransactionsList from './components/TransactionsList';
import SearchBar from './components/SearchBar';
import './styles/index.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions from json-server on load
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error('Failed to fetch:', err));
  }, []);

  // Add a new transaction (POST to json-server)
  const handleAddTransaction = (newTransaction) => {
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => setTransactions((prev) => [...prev, data]))
      .catch((err) => console.error('Failed to add transaction:', err));
  };

  // Filter transactions based on searched term
  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1><span>Exp</span>ense <span>Tra</span>cker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseEntryForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
};

export default App;
