// use inquiere package to prompt the user
const inquirer = require("inquirer");
// connect to out CRUD file
const CRUD = require("./CRUD")
// connect to our connection file
const connection=require("./connection")

// starting question automatically asked to the user. If yes, the first real question is asked
inquirer
.prompt([
{
type: "list",
message: "Would you like to start ",
choices: ["Yes", "No"],
name: "starting"
}
])
// use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
.then(function (answers) {

    if (answers.starting==="Yes"){
                firstQuestion();
    }

})
.catch(function(error){

    console.log(error)
})

// this asks the main question, "what do you want to do?"
// there is a switch case that reacts to the answer. If they want to read data, we call
// the CRUD method which reads the data, and the question is asked again. 
// If they want to do something else, we need more info 
// so we call a relevent function to get more info for that option, which then call a CRUD method, and then call firstQuestion() again
function firstQuestion(){
    inquirer
    .prompt([
    {
    type: "list",
    message: "What do you want to do? ",
    choices: 
        [
        "Add a department", 
        "View all departments",
        "Add a role",
        "View all roles",
        "Add an employee",
        "View all employees",
        "Update Employee Role"
        ],
    name: "choice"
    }
        ])
        .then(function (answers) {

            
            switch (answers.choice) {


                case "Add a department":
                    addDepoQuestion();
                    break

                case "View all departments":
                    CRUD.readDepartments(connection)
                    firstQuestion();
                    break
                
                case "Add a role":
                    addRoleQuestion();
                     break
                case "View all roles":
                    CRUD.readRoles(connection);
                    firstQuestion();
                    break
                case "Add an employee":
                    addEmployeeQuestion();
                    break
                case "View all employees":
                    CRUD.readEmployees(connection);  
                    firstQuestion()                  
                    break
                case "Update Employee Role":
                    updateEmployeeRoleQuestion();
                    break
                // maybe add a default
            }            
    
            // to catch errors
        })
        .catch(function(error){
    
            console.log(error)
        })

 
}




// a function to prompt the user for department info needed to add a department, and the CRUD method is called
function addDepoQuestion(){

    inquirer
    .prompt([
{
    type: "input",
    message: "What is the name of the department? ",
    name: "department_name"
}
    ])
    .then(function (answers) {
        CRUD.createDepartment(connection, answers.department_name)
        
        firstQuestion();


    })
    // This broke my code so I commented it out
    // .catch(function(error){

    //     console.log(error)
    // })
}




// a function to prompt the user for Role info needed to add a role, and the CRUD method is called
function addRoleQuestion(){
    // I may use this in the fututre
    // var depoArray=CRUD.defineDepartmnetsArray(connection);

    inquirer
    .prompt([
{
    type: "input",
    message: "Enter the title of the role",
    name: "role_title"
},
{
    type: "input",
    message: "Enter the salary of the role",
    name: "role_salary"
},
{
    type: "input",
    message: "Enter the department number of the role",
    name: "depo_id"
}
    ])
    // use .then promise
    .then(function (answers) {
        CRUD.createRole(connection, answers.role_title, answers.role_salary, answers.depo_id)
        
        firstQuestion();


    })
        // This broke my code so I commented it out
    // .catch(function(error){

    //     console.log(error)
    // })
}

// a function to prompt the user for Employee info needed to add an employee, and the CRUD method is called
function addEmployeeQuestion(){
    // var depoArray=CRUD.defineDepartmnetsArray(connection);

    inquirer
    .prompt([
{
    type: "input",
    message: "Enter the employee's first name",
    name: "first_name"
},
{
    type: "input",
    message: "Enter the employee's last name",
    name: "last_name"
},
{
    type: "list",
    message: "Is the employee a manager?",
    choices: ["Yes", "No"],
    name: "manager_check"
},


{    
    type: "input",
    message: "Enter the Role ID number",
    name: "role_id"

}
    ])
    // use .then promise
    .then(function (answers) {
        console.log(answers)
        // my current code uses Manager ID like a Boolean. 
        // 1 means a manager, null means not a manager. 
        // I would do more with this if I continued working on it.
        // For now we fill in the manager_id question based on their anser when we asked if the employee is a manager
        if (answers.manager_check==="Yes")
        {
            CRUD.createEmployee(connection, answers.first_name, answers.last_name, answers.role_id, 1)
        }
        else{
            CRUD.createEmployee(connection, answers.first_name, answers.last_name, answers.role_id, null)

        }
        
        firstQuestion();


    })
        // This broke my code so I commented it out
    // .catch(function(error){

    //     console.log(error)
    // })
}


// a function to prompt the user for info needed to update the role of a specific employee, and the CRUD method is called
function updateEmployeeRoleQuestion(){

    inquirer
    .prompt([
{
    type: "input",
    message: "Select which Employee you'd like to make updates to (enter their ID number)",
    name: "id"
},
{
    type: "input",
    message: "Enter the role you'd like the employeee to have now (enter the role ID number)",
    name: "role_id"
}

    ])
    // use .then promise
    .then(function (answers) {

            CRUD.updateEmployeeRole(connection, answers.role_id, answers.id)

        
        firstQuestion();


    })
        // This broke my code so I commented it out
    // .catch(function(error){

    //     console.log(error)
    // })
}
