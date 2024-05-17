# Stage 1: Build the Angular application
FROM node:16.14.0 AS build
WORKDIR /app
COPY package*.json ./

# Set npm configuration to use a different registry and increase timeout
RUN npm install

COPY . .
RUN npm run build 

# Stage 2: Serve the application with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/proj-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
