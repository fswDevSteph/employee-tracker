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
    } else if (answers.doWhat === 'Add A Department') {
     // Call the function to take department input
     takeDepartmentInput();
        } else if( answers.doWhat === 'Add A Role' ) {
          takeRoleInput();
        } else if (answers.doWhat === 'Add A Employee') {
           takeAddEmployeeInput();
        } else if (answers.doWhat === 'Update an Employee Role') {
          updateEmployeeNewRole();
        }
        else {
            // Handle other actions here
            console.log("Not yet implemented.");
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

//* 1. mysql terminal (open the integrated terminal)
//* 2. ensure connection matches what mysql is
//* 3. select * from to check all tables are working 



// Functionality which involves adding data to table
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the 
//! Function to take department input
function takeDepartmentInput() {
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
    const sql = `INSERT INTO department (departmentName) VALUES ('${departmentName}');`
    db.query(sql,  (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Department '${departmentName}' added successfully!`);
        }
    });
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
//! Function to take role input
function takeRoleInput() {
    inquirer.prompt([
        {
            name: "roleName",
            type: "input",
            message: "Enter the name of the role:"
        },
        {
            name: "salary",
            type: "input",
            message: "Enter the salary of the role:"
        },
        {
            name: "departmentId",
            type: "input",
            message: "Enter department ID:"
        },
    ]).then((answer) => {
      //!bottom of array of objects
        // Call the function to add department input to the database
        addRoleToDatabase(answer.roleName, answer.salary, answer.departmentId);
    });
}

//! Function to add role input to the database
function addRoleToDatabase(roleName, salary, departmentId) {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES 
    ('${roleName}', '${salary}', '${departmentId}');`
    db.query(sql,  (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Role '${roleName}' added successfully!`);
        }
    });
}
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
//! Function to take add employee  input
function takeAddEmployeeInput() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Enter the employees first name:"
        },
        {
            name: "lastName",
            type: "input",
            message: "Enter the employees last name:"
        },
        {
            name: "employeeRole",
            type: "input",
            message: "Enter the employees role:"
        },
        {
            name: "managerId",
            type: "input",
            message: "Enter the manager that the employee reports to:"
        }
    ]).then((answer) => {
      //!bottom of add an employee array of objects
        // Call the function to add employee input to the database
        takeAddEmployeeInputDb(answer.firstName, answer.lastName, answer.employeeRole, answer.managerId);
    });
}

//! Function to add add employee data input to the database
function takeAddEmployeeInputDb(firstName, lastName, employeeRole, managerId) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES 
    ('${firstName}', '${lastName}', '${employeeRole}', '${managerId}');`
   
    db.query(sql,  (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Role '${firstName}' added successfully!`);
        }
    });
}

//! Functionality which involves updating already existing data to in the table
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

//! Function to update Employees new Role
function updateEmployeeNewRole() {
    inquirer.prompt([
        {
            name: "employeeId",
            type: "input",
            message: "Provide the employee ID whose role you would like to update :"
        },
        {
            name: "roleId",
            type: "input",
            message: "Provide the ID of the role you would like this employee to have:"
        }
        
    ]).then((answer) => {
      //!bottom of update  new role objects
        // Call the function to add employee input to the database
        updateEmployeeNewRoleDB(answer.employeeId, answer.roleId);
    });
}

//! Function to add updates employee role data input to the database
function updateEmployeeNewRoleDB(employeeId, roleId) {
    const sql = `UPDATE employee SET role_id = '${roleId}' 
    WHERE id = '${employeeId}' `
  
    db.query(sql,  (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Role '${employeeId}' has been added to the employee successfully!`);
        }
    });
}