const mysql = require('mysql2'); //requires mysql"2" which is a package and you can see that in package.json
// mysql2 is a package for mysql database which allows us to communicate from here to the database

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
const questions = [
  {
    type: 'input',
    name: 'view_all_departments',
    message: 'View all departments:',
  },
  {
    type: 'input',
    name: 'view_all_roles',
    message: 'View all roles:',
  },
  {
    type: 'input',
    name: 'toc',
    message: 'Table of contents(press enter):',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation steps:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License:',
    choices: ['MIT', 'APACHEv2.0', 'GPLv3.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your git username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];

function init() {
  inquirer.prompt(questions);
}

init();
