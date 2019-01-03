FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
COPY --chown=node:node . .
COPY .env.docker .env
USER node
EXPOSE 5000
CMD ["npm", "start"]
