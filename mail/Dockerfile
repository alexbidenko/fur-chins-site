FROM golang:1.18-alpine AS build

ENV GOPATH="/go/src"

WORKDIR /go/src/application

COPY . .

RUN GOOS=linux go build -ldflags="-s -w" -o main .

FROM alpine

WORKDIR /go/app

COPY --from=build /go/src/application/main .

EXPOSE 8080

ENTRYPOINT  ["./main"]
