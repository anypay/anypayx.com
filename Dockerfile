FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_OPTIONS "--max-old-space-size=16192"
ENV NEXT_TELEMETRY_DISABLED 1

# Install app dependencies
COPY nextjs_TS/package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY ./nextjs_TS /usr/src/app

RUN npm run build

CMD npm start

