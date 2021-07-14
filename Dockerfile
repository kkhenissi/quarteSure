
# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node ./dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT [ "nginx","-g","daemon off;" ]
