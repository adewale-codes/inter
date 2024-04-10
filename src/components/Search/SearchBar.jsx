import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className='bg-white text-black'>
      <div className='w-full flex items-center pl-5 h-20'>
        <form className='flex items-center gap-2 w-full' onSubmit={handleSearch}>
          <div>
            <button type='submit'>
              <img src='/assets/Search.svg' alt='Search Icon' />
            </button>
          </div>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search by User Account Number...'
            className='text-grey-text w-full bg-transparent border-none outline-none px-2'
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
