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
//Menu screen : first "Then" of the user story
const question = [
  {
    type: 'list',
    name: 'doWhat', //profesh wordinng: name of the return value which is whatever the user selects
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'Add A Employee',
      'Update an Employee Role',
      'View All Roles',
      'Add A Role',
      'View All Departments',
      'Add A Department',
    ],
  },
];

//function for when a selction is made
function questionAnsweredThenWhat() {
  inquirer.prompt(question).then((answers) => {
    //.then RECIEVES the return value of a promise and uses it as the arg value (answers)
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
//example
questionAnsweredThenWhat();
// function addOne(number) {
//   number++;
//   return number;
// }

// let numeroUno = 1;

// addOne(numerUno).then((numeroTwo) => {
//   console.log(numerTwo);
// });
// let numeroThree = addOne(2);
//! 1. mysql terminal (open the integrated terminal)
//! 2. ensure connection matches what mysql is
//! 3. selct * from to check all tables are working 

//! --create all the functions (theyre already started)
