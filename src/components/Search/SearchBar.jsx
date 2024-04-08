import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('transactionId'); // Default search criteria

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery, searchCriteria);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <select value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)}>
        <option value="transactionId">Transaction ID</option>
        <option value="userAccountNumber">User Account Number</option>
        <option value="firstname">First Name</option>
        <option value="emailAddress">Email Address</option>
      </select>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
