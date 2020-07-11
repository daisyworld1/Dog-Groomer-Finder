
DROP DATABASE IF EXISTS GroomMyDog;

CREATE DATABASE GroomMyDog;

USE GroomMyDog;

CREATE TABLE groomers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  location_city varchar(100) NOT NULL,
  location_state varchar(100) NOT NULL,
  phone_number INT NOT NULL,
  service1 varchar(100) NOT NULL,
  price1 integer NOT NULL,
  PRIMARY KEY (id)
);