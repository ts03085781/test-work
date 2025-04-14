import { NodeInterface } from '../constants/interface';
import { Node } from './Node';
import { NodeType, NodePosition } from '../constants/enum';
import { IoIosArrowUp } from 'react-icons/io';
import '../assets/styles/binaryTree.css';

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

  const getNodeType = (introducer_code: string): NodeType => {
    const isRootNode = nodeTreeData?.code === rootNodeCode;
    const isDirectNode = introducer_code === rootNodeCode;

    if (isRootNode) return NodeType.ROOT;
    if (isDirectNode) return NodeType.DIRECT;
    return NodeType.INDIRECT;
  };


  const shouldShowPreviousLevel = () => {
    return rootNodeCode === nodeTreeData?.code && nodeTreeData?.introducer_code;
  };


  const shouldShowChildrenContainer = () => {
    return nodeTreeData && (nodeTreeData.l || nodeTreeData.r);
  };

  /**
   * 獲取節點容器的 CSS 類名
   */
  const getNodeContainerClassName = () => {
    const baseClass = 'binary-tree';
    const positionClass = nodePosition === NodePosition.LEFT ? 'left-line' : 
                          nodePosition === NodePosition.RIGHT ? 'right-line' : '';
    const hasChildren = (nodeTreeData?.l?.length || 0) > 0 || (nodeTreeData?.r?.length || 0) > 0;
    const bottomLineClass = hasChildren ? 'bottom-line' : '';

    return `${baseClass} ${positionClass} ${bottomLineClass}`.trim();
  };

  return (
    <div className={getNodeContainerClassName()}>
      {nodeTreeData !== null && (
        <div className="node-container">
          <Node
            code={nodeTreeData.code}
            name={nodeTreeData.name}
            registration_date={nodeTreeData.registration_date}
            introducer_code={nodeTreeData.introducer_code}
            nodeType={getNodeType(nodeTreeData.introducer_code)}
            onClickNodeCode={onClickNodeCode}
          />
          {shouldShowPreviousLevel() && (
            <div className="previous-level-container" onClick={handleClickPreviousLevel}>
              <IoIosArrowUp />
              <span>上一階</span>
            </div>
          )}
        </div>
      )}
      {shouldShowChildrenContainer() && (
        <div className="node-container">
          {nodeTreeData?.l?.length ? (
            nodeTreeData.l.map((node) => (
              <BinaryTree
                key={node.code}
                rootNodeCode={rootNodeCode}
                nodeTreeData={node}
                nodePosition={NodePosition.LEFT}
                onClickNodeCode={onClickNodeCode}
                onClickPreviousLevel={onClickPreviousLevel}
              />
            ))
          ) : (
            <div className="blank-node"/>
          )}
          {nodeTreeData?.r?.length ? (
            nodeTreeData.r.map((node) => (
              <BinaryTree
                key={node.code}
                rootNodeCode={rootNodeCode}
                nodeTreeData={node}
                nodePosition={NodePosition.RIGHT}
                onClickNodeCode={onClickNodeCode}
                onClickPreviousLevel={onClickPreviousLevel}
              />
            ))
          ) : (
            <div className="blank-node"/>
          )}
        </div>
      )}
    </div>
  );
};
