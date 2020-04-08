const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");


const CRUD = require("./CRUD")
const connection=require("./connection")


console.log("Test")


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

                    break
                // maybe add a default
            }            


            // if (answers.choice === "Add a department"){
            //     addDepoQuestion()
            // }
            // if (answers.choice === "View all departments"){
            //     // viewDepoQuestion()
            //     CRUD.readDepartments(connection)
            //     firstQuestion();
            // }
    
    
        })
        .catch(function(error){
    
            console.log(error)
        })

 
}





// inquire prompt for department asking department name
function addDepoQuestion(){

    inquirer
    .prompt([
{
    type: "input",
    message: "What is the name of the department? ",
    name: "department_name"
}
    ])
    // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
    .then(function (answers) {
        console.log(answers)
        CRUD.createDepartment(connection, answers.department_name)
        
        console.log("This part works!")
        firstQuestion();


    })
    // .catch(function(error){

    //     console.log(error)
    // })
}




// prompt function for add roles
function addRoleQuestion(){
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
        console.log(answers)
        CRUD.createRole(connection, answers.role_title, answers.role_salary, answers.depo_id)
        
        firstQuestion();


    })
    // .catch(function(error){

    //     console.log(error)
    // })
}

// inquire prompt for department asking department name
function addDepoQuestion(){

    inquirer
    .prompt([
{
    type: "input",
    message: "What is the name of the department? ",
    name: "department_name"
}
    ])
    // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
    .then(function (answers) {
        console.log(answers)
        CRUD.createDepartment(connection, answers.department_name)
        
        console.log("This part works!")
        firstQuestion();


    })
    // .catch(function(error){

    //     console.log(error)
    // })
}




// prompt function for add employees

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
        if (answers.manager_check==="Yes")
        {
            CRUD.createEmployee(connection, answers.first_name, answers.last_name, answers.role_id, 1)
        }
        else{
            CRUD.createEmployee(connection, answers.first_name, answers.last_name, answers.role_id, null)

        }
        
        firstQuestion();


    })
    // .catch(function(error){

    //     console.log(error)
    // })
}

// *prompt function for updating employee roles




    // function viewDepoQuestion(){

    //     inquirer
    //     .prompt([
    // {
    //     type: "list",
    //     message: "Would you like to view the current departments? ",
    //     choices: ["Yes", "No"],
    //     name: "department_view"
    // }
    //     ])
    //     // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
    //     .then(function (answers) {

    //         if (answers.department_view==="Yes"){
    //                        CRUD.readDepartments(connection)
    //         }
    //         console.log("This part also works");
    //     })
    //     .then(function(){
    //         firstQuestion();

    //     })
    //     .catch(function(error){

    //         console.log(error)
    //     })

    // }




// const questions = [

//     {
//         type: "input",
//         message: "Please enter the name",
//         name: "name"
//     },

//     {
//         type: "input",
//         message: "Please enter the employee ID number",
//         name: "id"
//     },

//     {
//         type: "input",
//         message: "Please enter the email",
//         name: "email"
//     },

//     {
//         type: "list",
//         message: "Please select the role",
//         choices: ["Engineer", "Intern"],
//         name: "role"
//     },





//     {
//         type: "input",
//         message: "Please enter the gitHub username",
//         name: "gitHub",
//         when: function (answers) {
//             return answers.role === "Engineer";
//         }
//     },

//     {
//         type: "input",
//         message: "Please enter the school name",
//         name: "school",
//         when: function (answers) {
//             return answers.role === "Intern";
//         }
//     }
// ]
// define a function to utilize the program
// function createManager() {
//     // define constant questions for the inquirer prompt
//     console.log("Create your team now")


//     // use inquirer to gather information about the development team members by prompting the questions variable
//     inquirer
//         .prompt(managerQuestions)
//         // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
//         .then(function (answers) {
//             const manager = new Manager(answers.name, parseInt(answers.id), answers.email, answers.officeNumber);
//             teamMembers.push(manager);


//             createTeam()
//             // addAnother();
//         })
// }

// function selectTask() {
//     inquirer
//         .prompt([{
//             type: "list",
//             message: "What would you like to do?",
//             choices: 
//             [
//                 "View Departments", 
//                 "Add Department",
//                 "View Roles",
//                 "Add Role",
//                 "View Employees",
//                 "Add Employee",
//                 "Update Emplyee Role"

//             ],
//             name: "choice"
//         }]
//         )
//         .then(function (answers) {

//             if (answers.choice === "Add Team Member") {
//                 addTeamMember()

//             }
//             else {
//                 buildTeam()

//             }
//         })


// }

// function addTeamMember() {
//     // define constant questions for the inquirer prompt



//     // use inquirer to gather information about the development team members by prompting the questions variable
//     inquirer
//         .prompt(questions)
//         // use .then promise and feed in the parameters of name, id, email, role, officeNumber, gitHub, and school
//         .then(function (answers) {

//             switch (answers.role) {


//                 case "Engineer":
//                     const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.gitHub);
//                     teamMembers.push(engineer);
//                     createTeam();
//                     break

//                 case "Intern":
//                     const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
//                     teamMembers.push(intern);
//                     createTeam();
//                     break
//                 // add a default
//             }

//         })
// }

// function buildTeam() {
//     console.log("Building Team")

//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
// }

// createManager();