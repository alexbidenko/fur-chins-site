FROM node:15-alpine as build
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn generate

FROM php:8-apache
WORKDIR /var/www/html

COPY --from=build /app/dist /var/www/html

EXPOSE 80
