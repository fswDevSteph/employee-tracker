const mysql = require('mysql2'); //requires mysql"2" which is a package and you can see that in package.json
// mysql2 is a package for mysql database which allows us to communicate from here to the database
const inquirer = require('inquirer');
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '12345678',
    database: 'employees_db',
  },
  console.log(`Connected to the employees_db database.`)
);
//This will be questions: HEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const question = [
  {
    type: 'list',
    name: 'doWhat',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add A Department',
      'Add A Role',
      'Add A Employee',
      'Update an Employee Role',
    ],
  },
];

const questions = [
  {
    type: 'input',
    name: 'view_all_departments',
    message: 'View All Departments:',
  },
  {
    type: 'input',
    name: 'view_all_roles',
    message: 'View All Roles:',
  },
  {
    type: 'input',
    name: 'view_all_employees',
    message: 'View all Employees:',
  },
  {
    type: 'input',
    name: 'add_a_department',
    message: 'Add a Department:',
  },
  {
    type: 'input',
    name: 'add_a_role',
    message: 'Add a Role:',
  },
  {
    type: 'list',
    name: 'add_an_employee',
    message: 'Add an Emplyee:',
    choices: ['MIT', 'APACHEv2.0', 'GPLv3.0', 'None'],
  },
  {
    type: 'input',
    name: 'update_employee_role',
    message: 'Update an Employee Role:',
  },
];

function init() {
  inquirer.prompt(question).then((answers) => {
    if (answers.doWhat == 'View All Departments') {
      console.log(answers);
      db.query('select * from department', (err, res) => {
        console.table(res);
      });
    } else if (answers.doWhat == 'View All Roles') {
      console.log(answers);
      db.query('select * from role', (err, res) => {
        console.table(res);
      });
    }
  });
}

init();
