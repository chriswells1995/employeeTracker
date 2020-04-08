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
        "View all departments"
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
                    viewDepoQuestion();
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