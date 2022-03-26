FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY nextjs_TS/package.json /usr/src/app/

RUN npm install 

# Bundle app source
COPY ./nextjs_TS /usr/src/app

RUN npm run build 

CMD npm start

