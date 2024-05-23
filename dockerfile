# Stage 1: Build the Angular application
FROM node:16.14.0 AS build
WORKDIR /app
COPY package*.json ./



# Set npm configuration to use a different registry and increase timeout
RUN npm install -y
RUN npm install -g @angular/cli@15.2.6
COPY . .
RUN npm run build 

RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/your-angular-app-name /app

# Expose port 80
EXPOSE 80

# Start the HTTP server
CMD ["http-server", "-p", "80"]
