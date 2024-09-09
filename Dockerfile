FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:1.27.0

# Remove default Nginx static resources
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build output to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
