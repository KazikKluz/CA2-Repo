# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install --omit=dev 

# Runtime stage
FROM node:20-alpine AS runtime

WORKDIR /app

RUN chown node:node ./

USER node

COPY --from=build /app /app

EXPOSE 3000

CMD [ "node", "server.js" ]