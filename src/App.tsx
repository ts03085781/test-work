import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import './App.css';

function App() {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;
