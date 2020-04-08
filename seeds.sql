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
VALUES ("X Men");

INSERT INTO departments (department_name)
VALUES ("Teen Titans");

INSERT INTO roles (title, salary, department_ID)
VALUES ("manager", 5000, 1);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Batman", 4000, 1);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Wonder Woman", 3000, 1);


INSERT INTO roles (title, salary, department_ID)
VALUES ("manager", 5000, 2);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Iron Man", 4000, 2);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Hulk", 3000, 2);



INSERT INTO roles (title, salary, department_ID)
VALUES ("manager", 5000, 3);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Wolverine", 4000, 3);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Nightcrawler", 3000, 3);



INSERT INTO roles (title, salary, department_ID)
VALUES ("manager", 5000, 4);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Raven", 4000, 4);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Beast Boy", 3000, 4);

INSERT INTO roles (title, salary, department_ID)
VALUES ("Cyborg", 2000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Clark", "Kent", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bruce", "Wayne", 2, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Diana", "Prince", 3, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Rogers", 4, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 5, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bruce", "Banner", 6, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Summers", 7, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Logan", "Howlette", 8, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Kurt", "Wagner", 9, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Dick", "Grayson", 10, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rachel", "Roth", 11, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Garfield", "Logan", 12, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Victor", "Stone", 13, null);



SELECT title, salary, department_name
FROM roles
INNER JOIN departments ON roles.department_ID= departments.id;

SELECT first_name, last_name, title, salary 
FROM employees
INNER JOIN roles ON employees.role_id= roles.id;