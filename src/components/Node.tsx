import { useState } from 'react';
import '../assets/styles/node.css';
import { NodeType } from '../constants/enum';

type NodeProps = {
  code: string;
  name: string;
  registration_date: Date;
  introducer_code: string;
  l: NodeProps | null;
  r: NodeProps | null;
  nodeType: NodeType;
  onClickCode: (code: string) => void;
};

export const Node = ({
  code,
  name,
  registration_date,
  introducer_code,
  nodeType,
  onClickCode,
}: NodeProps) => {
  const handleClickCode = () => {
    onClickCode(code);
  };

  return (
    <div className={`node ${nodeType}`}>
      <span className="code" onClick={handleClickCode}>
        {code}
      </span>
      <span>{name}</span>
      <span>{registration_date.toLocaleDateString()}</span>
      <span>{introducer_code}</span>
    </div>
  );
};
