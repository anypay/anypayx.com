FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn

COPY . /usr/src/app

RUN yarn build

CMD yarn start

