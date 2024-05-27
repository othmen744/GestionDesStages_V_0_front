# Stage 1: Build the Angular application
FROM node:16.14.0 AS build
WORKDIR /app
COPY package*.json ./

# Install dependencies and Angular CLI
RUN npm install --max-http-sockets=50 --max-http-header-size=512000
RUN npm install -g @angular/cli@15.2.6
COPY . .
RUN npm run build --configuration production

# Stage 2: Serve the app with http-server
FROM node:16.14.0-alpine
WORKDIR /app
COPY --from=build /app/dist/proj-front /app
RUN npm install -g http-server

# Expose port 80
EXPOSE 80

# Start the HTTP server
CMD ["http-server", "-p", "80"]
