FROM node:12.22.12-alpine
WORKDIR /babbel-app
COPY . .
RUN npm install
EXPOSE 8080 8000
CMD ["npm", "run", "start"]