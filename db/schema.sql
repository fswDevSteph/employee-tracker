DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(30),
 salary DECIMAL,
 department_id INT, 
 FOREIGN KEY ()
);

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30),
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);



-- Student

-- id |  name
--  1 |  Alex
--  2 |  John
--  3 |  Max

-- CREATE TABLE student (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY_KEY,
--     name VARCHAR(250)
-- );

-- Teachers
-- id |  name
--  1 |  Jack
--  2 |  Michael
--  3 |  Mary

-- CREATE TABLE teachers (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY_KEY,
--     name VARCHAR(250)
-- );

-- Classes

-- id | name    |  teacher_id  | student_id
--  1 | Math    |      1       |      2
--  2 | Science |      2       |      1
--  3 | English |      3       |      3

-- CREATE TABLE classes(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY_KEY,
--     name VARCHAR(250),
--     teacher_id INT,
--     FOREIGN KEY (teacher_id) REFERENCES teachers(id),
--     student_id INT,
--     FOREIGN KEY (student_id) REFERENCES student(id)
-- )

-- NOT NULL --> CONSTRAINTS

--  Report

-- id | name
--  1 |  R1
--  2 |  R2
--  3 |  R3

-- Department

-- id | name
--  1 |  IT
--  2 |  HR 
--  3 | Sales

-- Role

-- id | title | salary | department_id
--  1 |  test |  100   |       1
--  2 | test1 |  200   |       2
--  3 | test2 |  300   |       2

-- We want department_id to behave as a foreign key. 
-- That means that department_id in Role table will link to id column in the department table
