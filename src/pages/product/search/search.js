import React from 'react';
import './search.css';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <div className="search">
      <input placeholder="what are you looking for" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};
