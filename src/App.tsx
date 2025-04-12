import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Node } from './components/Node';
import './App.css';
import { NodeType } from './constants/enum';
function App() {
  const onSearch = (value: string) => {
    console.log(value);
  };

  const onClickCode = (code: string) => {
    console.log(code);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Node
        code="123"
        name="John Doe"
        registration_date={new Date()}
        introducer_code="123"
        l={null}
        r={null}
        nodeType={NodeType.ROOT}
        onClickCode={onClickCode}
      />
    </div>
  );
}

export default App;
