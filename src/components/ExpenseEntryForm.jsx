import React, { useState } from 'react';
import '../styles/ExpenseEntryForm.css';

const ExpenseEntryForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    amount: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onAddTransaction(formData);
  
    setFormData({
      date: '',
      description: '',
      amount: '',
      category: '',
    });    };

  
  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseEntryForm;
