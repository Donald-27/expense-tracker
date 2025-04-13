// src/App.jsx
import React, { useState } from 'react';
import ExpenseEntryForm from './components/ExpenseEntryForm';
import TransactionsList from './components/TransactionsList';
import SearchBar from './components/SearchBar'; // Correct import, no need for curly braces
import { transactions as initialData } from './data/transactions';
import './styles/index.css';


const App = () => {
  const [transactions, setTransactions] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1> <span>Exp</span>ense <span>Tra</span>cker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseEntryForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
};

export default App;
