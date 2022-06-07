FROM node:18-alpine3.14

# RUN apt-get update && apt-get install wget -y 

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# RUN apk add bash

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY src/package.json /usr/src/app/

RUN npm install express mysql

COPY src/index.js .

EXPOSE 3000

CMD [ "node", "index.js" ]