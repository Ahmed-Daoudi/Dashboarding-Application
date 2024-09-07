# Use the official MySQL image from the Docker Hub
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=signup
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=user_password

# Copy the SQL script to the container's startup directory
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose the default MySQL port
EXPOSE 3306
