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
    if (answers.doWhat == 'View All Departments') { // checking condition
     viewAllDepartments() //calling that function
    } else if (answers.doWhat == 'View All Roles') {
     viewAllRoles()
    } else if (answers.doWhat == 'View All Employees') {
      viewAllEmployees()
    }

  });
}

function viewAllDepartments () { 
      db.query('select * from department', (err, res) => {
        console.table(res);
      });
}

function viewAllRoles () {
  db.query('select * from role', (err, res) => {
     if(err) console.log(err)    
    console.table(res);
      });
}

function viewAllEmployees () {
  db.query('select employee.id, first_name, last_name, title, salary, departmentName FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;', (err, res) => {
        if(err) console.log(err)
        console.table(res);
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
//* 1. mysql terminal (open the integrated terminal)
//* 2. ensure connection matches what mysql is
//* 3. select * from to check all tables are working 



// Functionality which involves adding data to table

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the 
//! Function to take department input
function takeDepartmentInput(answer) {
    inquirer.prompt([
        {
            name: "departmentName",
            type: "input",
            message: "Enter the name of the department:"
        }
    ]).then((answer) => {
        // Call the function to add department input to the database
        addDepartmentToDatabase(answer.departmentName);
    });
}

//! Function to add department input to the database
function addDepartmentToDatabase(departmentName) {
    const sql = 'INSERT INTO department (id),(departmentName) VALUES ();
    db.query(sql, [departmentName], (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Department '${departmentName}' added successfully!`);
        }
    });
}
inquirer.prompt(question).then((answers) => {
        if (answers.doWhat === 'Add A Department') {
            // Call the function to take department input
            takeDepartmentInput();
        } else {
            // Handle other actions here
            console.log("Not yet implemented.");
        }
    });


// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// Add an if-else statement in the main function
// Create a function to add Employee
// Call the addEmployee function inside the if-else statement
// Inside addEmployee Function, you will create one more inquirer.prompt to ask the details of the employee to be added i.e first_name, last_name, role_id and manage_id
// Make use of the insert command in the sql to insert data in the database


// Functionality which involves updating already existing data to in the table

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// Add an if-else statement in the main function
// Create a function to update Employee
// Call the updateEmployee function inside the if-else statement
// Inside updateEmployee Function, you will create one more inquirer.prompt to ask the details of the employee to update
// Make use of the update command in the sql to update data in the database

