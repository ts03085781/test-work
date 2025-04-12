import { useState } from 'react';
import { FaPeopleGroup } from 'react-icons/fa6';
import '../assets/styles/searchBar.css';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-title">
        <FaPeopleGroup />
        <span>保護關係查詢</span>
      </div>
      <div className="search-bar-content">
        <span>保戶編號</span>
        <input
          className="search-bar-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-bar-button" onClick={handleSearch}>
          查詢
        </button>
      </div>
    </div>
  );
};
