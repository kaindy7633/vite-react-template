# 指定使用最新的nginx源
FROM nginx:latest

# 将dist目录拷贝到nginx目录下
COPY ./dist /usr/share/nginx/html/

# 暴露端口
EXPOSE 8085

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]