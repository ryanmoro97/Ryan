FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY server/package*.json server/
RUN cd server && npm ci --omit=dev
COPY server/ server/

COPY client/package*.json client/
RUN cd client && npm ci --omit=dev
COPY client/ client/

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]
