FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm i --production

COPY . .

EXPOSE 3000

CMD ["node", "src/bin/www"]