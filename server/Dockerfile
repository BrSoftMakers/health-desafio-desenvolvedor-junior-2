FROM node:18

WORKDIR /app/server

EXPOSE 5000

COPY server/ .

RUN npm install

RUN npm run build

CMD npm start