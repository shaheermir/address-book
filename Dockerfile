FROM node:14.16.1-alpine
WORKDIR '/app'
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY ./ ./
RUN npm run build
 
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80