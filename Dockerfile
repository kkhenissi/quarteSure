
# # stage 1
# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# # RUN yarn ng  build --prod

# # stage 2
# FROM nginx:alpine
# COPY --from=node ./dist /usr/share/nginx/html
# EXPOSE 80 443
# ENTRYPOINT [ "nginx","-g","daemon off;" ]


### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run ./node_modules/.bin/ng build --prod
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/*.* /usr/share/nginx/html
