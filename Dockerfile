FROM node:18-alpine3.14

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

EXPOSE 5000

CMD ["yarn", "start"]
