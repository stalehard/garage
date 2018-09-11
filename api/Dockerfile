FROM node:10-alpine

RUN apk add --no-cache curl

COPY . /app

WORKDIR /app

RUN yarn

EXPOSE $API_PORT

CMD [ "node", "src/index.js" ]