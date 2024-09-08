-- Create the database
-- Create the 'signup' database if it does not exist
CREATE DATABASE IF NOT EXISTS signup;

-- Use the 'signup' database
USE signup;

-- Create the 'login' table with id, name, email, and password columns
CREATE TABLE IF NOT EXISTS login (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Add columns for password reset functionality
ALTER TABLE login
ADD COLUMN verificationToken VARCHAR(64) NULL,
ADD COLUMN verified BOOLEAN NOT NULL DEFAULT 0;



