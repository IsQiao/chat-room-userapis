FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g yarn
RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "npyarnm", "run", "serve" ]