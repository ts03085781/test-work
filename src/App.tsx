import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { BinaryTree } from './components/BinaryTree';
import { NodeInterface } from './constants/interface';
import './App.css';

function App() {
  const [rootNode, setRootNode] = useState<NodeInterface | null>(null);

  const onSearch = async (code: string) => {
    try {
      const response = await fetch(`/api/policyholders?code=${code}`);
      const data = (await response.json()) as NodeInterface;
      if (data) {
        setRootNode({ ...data });
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onClickNodeCode = async (code: string) => {
    try {
      const response = await fetch(`/api/policyholders?code=${code}`);
      const data = (await response.json()) as NodeInterface;
      if (data) {
        setRootNode({ ...data });
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onClickPreviousLevel = async (code: string) => {
    try {
      const response = await fetch(
        `/api/policyholders/${code}/top?code=${code}`
      );
      const data = (await response.json()) as NodeInterface;
      if (data) {
        setRootNode({ ...data });
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <BinaryTree
        rootNodeCode={rootNode?.code}
        nodeTreeData={rootNode}
        onClickNodeCode={onClickNodeCode}
        onClickPreviousLevel={onClickPreviousLevel}
      />
    </div>
  );
}

export default App;
