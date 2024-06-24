# Stage 1: Build the Angular application
FROM node:16.14.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --max-http-sockets=50 --max-http-header-size=512000
RUN npm install -g @angular/cli@15.2.6
COPY . .
RUN npm run build 

# Stage 2: Serve the app with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/proj-front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
