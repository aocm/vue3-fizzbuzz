FROM node:14-slim

WORKDIR /usr/src/app
RUN apt-get update
RUN apt-get install git -y
RUN npm install -g @vue/cli
