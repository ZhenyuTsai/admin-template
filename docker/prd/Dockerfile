# 设置基础镜像
FROM nginx:alpine

# 将docker/prd/nginx.conf复制到 /etc/nginx/nginx.conf下，用本地的nginx.conf配置来替换nginx镜像里的默认配置
COPY docker/prd/nginx.conf /etc/nginx/nginx.conf
COPY docker/prd/proxy.conf /etc/nginx/proxy.conf
COPY docker/prd/conf.d/ /etc/nginx/conf.d/

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/ /usr/share/nginx/html/

# 声明端口
EXPOSE 8080

RUN echo 'echo init ok!!'