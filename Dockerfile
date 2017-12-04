# Docker file for express helloworld service

FROM centos:centos7

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all

RUN npm install pm2 -g

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 3000
CMD ["pm2-docker", "index.js"]
