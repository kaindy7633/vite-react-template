/**
 * @description 权限校验相关的 API 请求定义，包含用户登录、登出等
 */
import request from '@/utils/request';

enum API {
  UserInfo = '/api/getUser',
}

export const getUserInfo = () => request.get(API.UserInfo, {});
