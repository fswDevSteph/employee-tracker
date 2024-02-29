USE employees_db;
INSERT INTO department (departmentName)
VALUES ('Management'),
    ('Staff');
INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 50000, 1),
    ('Waitress', 25000, 2),
    ('Busser', 20000, 2),
    ('Cook', 25000, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Stephanie', 'Perroni', 1, 1),
    ('Frank', 'Tank', 3, 1),
    ('Sam', 'Allen', 2, 1),
    ('Cody', 'Camden', 4, 1);