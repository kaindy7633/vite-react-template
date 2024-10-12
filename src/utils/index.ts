/**
 *  各种工具函数
 */

// 生成可指定位数的随机码符串
// 包含数字、大小写字母、特殊字符，可通过参数控制是否只生成纯数字、纯字母、或者不包含特殊字符
export const generateRandomString = (
  length: number = 4,
  rangeCtrl: 'all' | 'onlyNumber' | 'onlyCharts' = 'all',
  isSpecialCharts: boolean = false
): string => {
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // 判断传入的控制参数
  if (rangeCtrl === 'onlyNumber') {
    characters = '0123456789';
  }

  if (rangeCtrl === 'onlyCharts') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }

  if (isSpecialCharts) {
    characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#-=';
  }

  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
};
