FROM node:10-alpine

RUN apk add --no-cache curl

COPY . /app

WORKDIR /app

RUN yarn

RUN yarn tsc

EXPOSE $API_PORT

CMD [ "node", "dist/index.js" ]