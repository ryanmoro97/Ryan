FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# copy the 'node_modules' folder and server app from the previous build stage
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app /app

EXPOSE 8000

CMD ["node", "server.js"]
