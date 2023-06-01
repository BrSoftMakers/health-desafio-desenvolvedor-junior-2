FROM node:16

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 5000

CMD ["node", "app.js"]