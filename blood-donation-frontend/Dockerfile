FROM node:22-slim AS build
WORKDIR /code
ENV PATH=/code/node_modules/.bin:$PATH
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json .
RUN npm install --legacy-peer-deps
RUN npm rebuild node-sass
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
