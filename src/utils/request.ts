/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { notification } from "antd";
import { codeMessage } from "@/constants";
import { extend, type ResponseError } from "umi-request";
import { useTokenStore } from "../store";

/**
 * @TODO 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: "您的网络发生异常，无法连接服务器",
      message: "网络异常",
    });
  }

  return response;
};

/**
 * @TODO 配置request请求时的默认参数
 */
const request = extend({
  // 默认错误处理
  errorHandler,
  // 开启CORS跨域
  crossOrigin: true,
  // 默认请求是否带上cookie
  // credentials: 'include',
});

/**
 * @TODO 请求拦截
 */
request.interceptors.request.use((url, options) => {
  const { accessToken } = useTokenStore.getState().token;

  let newOptions = { ...options };

  newOptions.headers = {
    ...newOptions.headers,
    Authorization: `${accessToken}`,
  };

  // 如果是导出类接口加上类型
  if (
    url.includes("export") ||
    url.includes("download") ||
    url.includes("Download")
  ) {
    newOptions.responseType = "blob";
  }
  return {
    url: `${url}`,
    options: { ...newOptions },
  };
});

/**
 * @TODO 响应拦截
 */
request.interceptors.response.use(async (response) => {
  // 克隆响应对象做解析处理
  // 这里的res就是我们请求到的数据
  const res = await response.clone().json();
  return res;
});

export default request;
