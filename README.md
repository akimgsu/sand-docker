# sand-docker
## express-api
- cd express-api
- docker build -t sample-api .


# Commands

## image(s)
docker images

## container
docker container

## system
docker system prune

## build
docker build -t "" .

## run
docker run --name "C-name" -p port:port "image-name"
docker run --name "api_c" -p 7001:7000 --rm -v /Users/woo/codes/abe/docker/sand-docker/express-api:/app  -v /app/node_modules "appapi:nodemon"
docker run --name "C-name" -p port:port (--rm) (-v)() "image-name"

## ps
docker ps -aq

## start / stop
docker start "C-name"

## compose
docker-compose up filename

## Others
netstat -vanp tcp | grep 3000
lsof -i tcp:3000