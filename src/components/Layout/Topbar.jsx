import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import { api } from '../../services/api';

const Topbar = () => {
  const handleSearch = async (searchQuery, searchCriteria) => {
    try {
      let searchResult;
      switch (searchCriteria) {
        case 'transactionId':
          searchResult = await api.singleTransaction(searchQuery);
          break;
        case 'userAccountNumber':
          searchResult = await api.singleUserData(searchQuery);
          break;
        default:
          console.error('Invalid search criteria');
          break;
      }
      console.log('Search Result:', searchResult.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="topbar">
      <div className="logo">Your Logo</div>
      <nav className="navigation">
        <ul>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default Topbar;
