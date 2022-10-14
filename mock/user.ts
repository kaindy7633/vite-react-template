import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'ok',
        data: ['aa', 'bb'],
      };
    },
  },
] as MockMethod[];
