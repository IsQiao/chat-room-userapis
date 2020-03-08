FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

RUN mkdir -p './api/dist'
RUN npm run tsoa:gen

CMD [ "npm", "run", "start" ]