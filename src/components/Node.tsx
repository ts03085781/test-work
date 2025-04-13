import '../assets/styles/node.css';
import { NodeType } from '../constants/enum';
interface NodePropsInterface {
  code: string;
  name: string;
  registration_date: Date;
  introducer_code: string;
  nodeType: NodeType;
  onClickNodeCode: (code: string) => void;
}

export const Node = ({
  code,
  name,
  registration_date,
  introducer_code,
  nodeType,
  onClickNodeCode,
}: NodePropsInterface) => {
  const handleClickNodeCode = () => {
    onClickNodeCode(code);
  };

  const setRegistrationDate = (registration_date: Date) => {
    return new Date(registration_date).toLocaleDateString();
  };

  return (
    <div className={`node ${nodeType}`}>
      <span className="code" onClick={handleClickNodeCode}>
        保戶編號：{code}
      </span>
      <span>保戶姓名：{name}</span>
      <span>加入日期：{setRegistrationDate(registration_date)}</span>
      <span>介紹人保戶編號：{introducer_code}</span>
    </div>
  );
};
