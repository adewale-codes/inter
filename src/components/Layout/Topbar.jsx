import React, { useState } from 'react';
import SearchBar from '../Search/SearchBar';
import { api } from '../../services/api';

const Topbar = () => {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (searchQuery) => {
    try {
      const searchResult = await api.singleUserData(searchQuery);
      console.log('Search Result:', searchResult);

      if (searchResult && searchResult.data && searchResult.data.data) {
        console.log('Search Result Data:', searchResult.data.data);
        setUserData(searchResult.data.data);
      } else {
        console.error('Search result is invalid:', searchResult);
      }
    } catch (error) {
      console.error('Error searching:', error);
    }
  };
  
  return (
    <div className='bg-white text-black px-5'>
      <SearchBar onSearch={handleSearch} />
      {userData && (
        <div className="user-info">
          <p>Email: {userData.emailAddress}</p>
          <p>Name: {userData.firstname} {userData.lastname}</p>
          <p>Address: {userData.address}</p>
          <p>Gender: {userData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Topbar;
