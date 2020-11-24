FROM node:10.16.0 AS builder
COPY . /app
WORKDIR /app
RUN npm install --loglevel=silent --no-summary
RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app /app
WORKDIR /app

EXPOSE 9000

CMD ["sh", "-c", "./init-env.sh && cp env-config.js ./build && nginx -g 'daemon off;'"]