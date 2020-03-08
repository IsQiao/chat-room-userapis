FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

RUN mkdir -p './api/dist'
CMD [ "npm", "run", "serve" ]