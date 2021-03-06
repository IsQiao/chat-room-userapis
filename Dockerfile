FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

RUN mkdir -p './api/dist'
RUN mkdir -p './src/routes'

RUN npm run tsoa:gen   

CMD [ "npm", "run", "start" ]