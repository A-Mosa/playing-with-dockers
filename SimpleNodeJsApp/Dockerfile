# Specifying the base image
FROM node:alpine

WORKDIR /usr/app

# Installing required programs (dependecies)
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]