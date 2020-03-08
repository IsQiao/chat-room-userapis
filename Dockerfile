FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN mkdir -p './api/dist'
RUN npm run tsoa:gen

CMD [ "npm", "run", "start" ]