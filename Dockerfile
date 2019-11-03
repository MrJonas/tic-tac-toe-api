FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run tsc

EXPOSE 4000
CMD [ "node", "./build/app.js" ]