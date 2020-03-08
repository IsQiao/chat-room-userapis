FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN mkdir './api/dist'
CMD [ "npm", "run", "serve" ]