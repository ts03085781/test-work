// test.ts

import { MockMethod } from 'vite-plugin-mock';
import { NodeInterface } from '../constants/interface';
const mockData_1 = {
  code: '01',
  name: '保戶 1',
  registration_date: new Date('2024-01-01'),
  introducer_code: '',
  l: [
    {
      code: '02',
      name: '保戶 2',
      registration_date: new Date('2024-01-02'),
      introducer_code: '01',
      l: [
        {
          code: '04',
          name: '保戶 4',
          registration_date: new Date('2024-01-02'),
          introducer_code: '01',
          l: [
            {
              code: '08',
              name: '保戶 8',
              registration_date: new Date('2024-01-02'),
              introducer_code: '01',
            },
          ],
          r: [
            {
              code: '09',
              name: '保戶 9',
              registration_date: new Date('2024-01-03'),
              introducer_code: '02',
            },
          ],
        },
      ],
      r: [
        {
          code: '05',
          name: '保戶 5',
          registration_date: new Date('2024-01-03'),
          introducer_code: '02',
          l: [
            {
              code: '10',
              name: '保戶 10',
              registration_date: new Date('2024-01-02'),
              introducer_code: '05',
            },
          ],
          r: [
            {
              code: '11',
              name: '保戶 11',
              registration_date: new Date('2024-01-03'),
              introducer_code: '02',
            },
          ],
        },
      ],
    },
  ],
  r: [
    {
      code: '03',
      name: '保戶 3',
      registration_date: new Date('2024-01-03'),
      introducer_code: '01',
      l: [
        {
          code: '06',
          name: '保戶 6',
          registration_date: new Date('2024-01-02'),
          introducer_code: '01',
          l: [
            {
              code: '12',
              name: '保戶 12',
              registration_date: new Date('2024-01-02'),
              introducer_code: '06',
            },
          ],
          r: [
            {
              code: '13',
              name: '保戶 13',
              registration_date: new Date('2024-01-03'),
              introducer_code: '06',
            },
          ],
        },
      ],
      r: [
        {
          code: '07',
          name: '保戶 7',
          registration_date: new Date('2024-01-03'),
          introducer_code: '02',
          l: [
            {
              code: '14',
              name: '保戶 14',
              registration_date: new Date('2024-01-02'),
              introducer_code: '01',
            },
          ],
          r: [
            // {
            //   code: '15',
            //   name: '保戶 15',
            //   registration_date: new Date('2024-01-03'),
            //   introducer_code: '02',
            // },
          ],
        },
      ],
    },
  ],
};

const getNodeDataOfTargetCode = (code: string, node: NodeInterface | null ): NodeInterface | null => {
  // 如果節點為空，返回 null
  if (!node) return null;

  // 如果找到目標節點，直接返回
  if (node.code === code) return node;

  // 遞迴搜尋左子樹
  const leftResult = node.l?.reduce((result, child) => {
    return result || getNodeDataOfTargetCode(code, child);
  }, null as NodeInterface | null);

  // 如果左子樹找到結果，直接返回
  if (leftResult) return leftResult;

  // 遞迴搜尋右子樹
  const rightResult = node.r?.reduce((result, child) => {
    return result || getNodeDataOfTargetCode(code, child);
  }, null as NodeInterface | null);

  // 返回右子樹的搜尋結果
  return rightResult;
};

const getPreviousNodeData = (code: string, node: NodeInterface | null, previousNode: NodeInterface | null): NodeInterface | null => {
    // 如果節點為空，返回 null
    if (!node) return null;

    // 如果找到目標的節點，則返回 "上一個節點的資料 "
    if (node.code === code) return previousNode;
  
    // 遞迴搜尋左子樹
    const leftResult = node.l?.reduce<NodeInterface | null>((result, child) => {
      return result || getPreviousNodeData(code, child, node);
    }, null);
  
    // 如果左子樹找到結果，直接返回
    if (leftResult) return leftResult;
  
    // 遞迴搜尋右子樹
    const rightResult = node.r?.reduce<NodeInterface | null>((result, child) => {
      return result || getPreviousNodeData(code, child, node);
    }, null);
  
    // 返回右子樹的搜尋結果
    return rightResult;
};

export default [
  {
    url: '/api/policyholders',
    method: 'get',
    response: ({ query }: { query: { code: string } }) => {
      return getNodeDataOfTargetCode(query.code, mockData_1 as NodeInterface);
    },
  },
  {
    url: '/api/policyholders/:code/top',
    method: 'get',
    response: ({ query }: { query: { code: string } }) => {
      return getPreviousNodeData(query.code, mockData_1 as NodeInterface, null);
    },
  },
] as MockMethod[];
