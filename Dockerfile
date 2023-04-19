FROM node

WORKDIR /app

# ENV API_URL=http://ryanmoro.com:8008
# ENV DB_USER=${DB_USER}
# ENV DB_PASSWORD=${DB_PASSWORD}
# ENV DB_NAME=${DB_NAME}
# ENV DB_HOST=${DB_HOST}
# ENV DB_PORT=${DB_PORT}
# ENV DB_DIALECT=${DB_DIALECT}


COPY package*.json ./
RUN npm install

WORKDIR /app/server
COPY server/package*.json ./
RUN npm install

WORKDIR /app/client
COPY client/package*.json ./
RUN npm install

WORKDIR /app
COPY . .


EXPOSE 8008

CMD [ "npm", "start" ]
