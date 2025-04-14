import '../assets/styles/binaryTree.css';
import { NodeInterface } from '../constants/interface';
import { Node } from './Node';
import { NodeType, NodePosition } from '../constants/enum';
import { IoIosArrowUp } from 'react-icons/io';

interface BinaryTreeInterface {
  rootNodeCode: string | undefined;
  nodeTreeData: NodeInterface | null;
  nodePosition?: NodePosition;
  onClickNodeCode: (code: string) => void;
  onClickPreviousLevel?: (code: string) => void;
}

export const BinaryTree = ({
  rootNodeCode,
  nodeTreeData,
  nodePosition,
  onClickNodeCode,
  onClickPreviousLevel,
}: BinaryTreeInterface) => {
  const handleClickPreviousLevel = () => {
    if (nodeTreeData && onClickPreviousLevel) {
      onClickPreviousLevel(nodeTreeData.code);
    }
  };

  const setNodeType = (introducer_code: string) => {
    if (nodeTreeData?.code === rootNodeCode) {
      return NodeType.ROOT;
    }

    if (introducer_code === rootNodeCode) {
      return NodeType.DIRECT;
    }

    return NodeType.INDIRECT;
  };

  return (
    <div
      className={`binary-tree 
        ${nodePosition === NodePosition.LEFT ? 'left-line' : ''} ${
        nodePosition === NodePosition.RIGHT ? 'right-line' : ''
      } ${
        (nodeTreeData?.l?.length || 0) > 0 || (nodeTreeData?.r?.length || 0) > 0
          ? 'bottom-line'
          : ''
      }`}
    >
      {nodeTreeData !== null && (
        <div className="node-container">
          <Node
            code={nodeTreeData.code}
            name={nodeTreeData.name}
            registration_date={nodeTreeData.registration_date}
            introducer_code={nodeTreeData.introducer_code}
            nodeType={setNodeType(nodeTreeData.introducer_code)}
            onClickNodeCode={onClickNodeCode}
          />
          {rootNodeCode === nodeTreeData.code &&
            nodeTreeData.introducer_code && (
              <div
                className="previous-level-container"
                onClick={handleClickPreviousLevel}
              >
                <IoIosArrowUp />
                <span>上一階</span>
              </div>
            )}
        </div>
      )}
      {nodeTreeData && (nodeTreeData.l || nodeTreeData.r) && (
        <div className="node-container">
          {nodeTreeData.l &&
            nodeTreeData.l.map((node) => (
              <BinaryTree
                key={node.code}
                rootNodeCode={rootNodeCode}
                nodeTreeData={node}
                nodePosition={NodePosition.LEFT}
                onClickNodeCode={onClickNodeCode}
                onClickPreviousLevel={onClickPreviousLevel}
              />
            ))}
          {nodeTreeData.r &&
            nodeTreeData.r.map((node) => (
              <BinaryTree
                key={node.code}
                rootNodeCode={rootNodeCode}
                nodeTreeData={node}
                nodePosition={NodePosition.RIGHT}
                onClickNodeCode={onClickNodeCode}
                onClickPreviousLevel={onClickPreviousLevel}
              />
            ))}
        </div>
      )}
    </div>
  );
};
