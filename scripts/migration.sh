#!/bin/bash
git pull
docker-compose pull

docker-compose down

docker-compose up -d db
docker-compose up -d pgweb
docker-compose up -d devtools

docker exec -it garage_devtools_1 /bin/sh

docker-compose up -d