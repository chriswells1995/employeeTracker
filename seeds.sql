DROP DATABASE IF EXISTS office_db;
 
CREATE DATABASE office_db; 

USE office_db;

-- three tables, departments, roles, and employees

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (20) NOT NULL,
  department_ID INT (20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT (20) NOT NULL,
  manager_id INT (20) NULL,
  
  PRIMARY KEY (id)
);


INSERT INTO departments (department_name)
VALUES ("Justice League");

INSERT INTO departments (department_name)
VALUES ("Avengers");

INSERT INTO departments (department_name)
VALUES ("Justice League");