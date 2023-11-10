FROM golang:1.21-alpine AS build

ENV GOPATH="/go/src"

WORKDIR /app

COPY . .

RUN GOOS=linux go build -ldflags="-s -w" -o main .

FROM alpine

RUN adduser --system --uid 1001 server

USER server

WORKDIR /app

COPY --from=build --chown=server:server /app/main .

EXPOSE 8080

ENTRYPOINT  ["./main"]
