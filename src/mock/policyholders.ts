// test.ts

import { MockMethod } from 'vite-plugin-mock';

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

const mockData_2 = {
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
};

const mockData_3 = {
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
};

const mockData_4 = {
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
};

const mockData_5 = {
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
};

const mockData_6 = {
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
};

const mockData_7 = {
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
};

const mockData_8 = {
  code: '08',
  name: '保戶 8',
  registration_date: new Date('2024-01-02'),
  introducer_code: '01',
  l: [],
  r: [],
};

const mockData_9 = {
  code: '09',
  name: '保戶 9',
  registration_date: new Date('2024-01-03'),
  introducer_code: '02',
  l: [],
  r: [],
};

const mockData_10 = {
  code: '10',
  name: '保戶 10',
  registration_date: new Date('2024-01-02'),
  introducer_code: '05',
  l: [],
  r: [],
};

const mockData_11 = {
  code: '11',
  name: '保戶 11',
  registration_date: new Date('2024-01-03'),
  introducer_code: '02',
  l: [],
  r: [],
};

const mockData_12 = {
  code: '12',
  name: '保戶 12',
  registration_date: new Date('2024-01-02'),
  introducer_code: '06',
  l: [],
  r: [],
};

const mockData_13 = {
  code: '13',
  name: '保戶 13',
  registration_date: new Date('2024-01-03'),
  introducer_code: '06',
  l: [],
  r: [],
};

const mockData_14 = {
  code: '14',
  name: '保戶 14',
  registration_date: new Date('2024-01-02'),
  introducer_code: '01',
  l: [],
  r: [],
};

// const mockData_15 = {
//   code: '15',
//   name: '保戶 15',
//   registration_date: new Date('2024-01-03'),
//   introducer_code: '02',
//   l: [],
//   r: [],
// };

export default [
  {
    url: '/api/policyholders',
    method: 'get',
    response: ({ query }: { query: { code: string } }) => {
      switch (query.code) {
        case '01':
          return mockData_1;
        case '02':
          return mockData_2;
        case '03':
          return mockData_3;
        case '04':
          return mockData_4;
        case '05':
          return mockData_5;
        case '06':
          return mockData_6;
        case '07':
          return mockData_7;
        case '08':
          return mockData_8;
        case '09':
          return mockData_9;
        case '10':
          return mockData_10;
        case '11':
          return mockData_11;
        case '12':
          return mockData_12;
        case '13':
          return mockData_13;
        case '14':
          return mockData_14;
        // case '15':
        //   return mockData_15;
        default:
          return null;
      }
    },
  },
  {
    url: '/api/policyholders/:code/top',
    method: 'get',
    response: ({ query }: { query: { code: string } }) => {
      switch (query.code) {
        case '02':
        case '03':
          return mockData_1;
        case '04':
        case '05':
          return mockData_2;
        case '06':
        case '07':
          return mockData_3;
        case '08':
        case '09':
          return mockData_4;
        case '10':
        case '11':
          return mockData_5;
        case '12':
        case '13':
          return mockData_6;
        case '14':
        // case '15':
          return mockData_7;
        default:
          return null;
      }
    },
  },
] as MockMethod[];
