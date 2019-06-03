FROM node:10-alpine

COPY api/ /app/

COPY config/ /app/src/config/

COPY models/ /app/src/models/

COPY migrations/ /app/migrations/

COPY seeders/ /app/seeders/

WORKDIR /app

RUN apk add --no-cache curl && yarn && yarn tsc

EXPOSE 8080

CMD [ "yarn", "prod" ]