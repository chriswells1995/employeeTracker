// All of these functions take in the connection const, defined in index.js by connecting to connection.js,
// and they take in their relevent parameters for Creating, Reading, or Updating data in MySQL
// The ?s are placeholders in the syntax, with the parameters in the function being fed into the queries.

// create department
function createDepartment(connection, departmentName) {
    console.log("Inserting a new depo...\n");

  
     connection.query(
      "INSERT INTO departments SET ?",
      {
        department_name: departmentName,

      })
      .then(function(result){
        console.log(result.affectedRows + " depo(s) inserted!\n")

  

      })
      return;
 
  }


  function readDepartmnets(connection) {
    console.log("Selecting all depos...\n");
  // use connectionquery to execute a SQL query
  
    connection.query("SELECT * FROM departments")
        .then(function(result){
            // I had a bit of trouble displaying these tables, so anytime that happens I also console log some line breaks 
            // so things overlap less
            console.log('\n')      
      console.table(result);
            console.log('\n')
            console.log('\n')

            console.log("Press the up or down arrow keys to continue")

            
    //   connection.end();
        })
        .catch(function(error){

            console.log(error)
        })
 
        return;

    };

    // Create role
    function createRole(connection, role_title, role_salary, depo_id) {
        console.log("Inserting a new role...\n");

      
         connection.query(
          "INSERT INTO roles SET ?",
          {
            title: role_title,
            salary: role_salary,
            department_ID: depo_id
          },
          )
          .then(function(result){
        //  console.log(result)
            console.log(result.affectedRows + " role(s) inserted!\n")

            console.log('\n')
            console.log('\n')
    
          })
          return;
     
      }
    // read role
    function readRoles(connection) {
        console.log("Selecting all roles...\n");
      // use connectionquery to execute a SQL query
      
        connection.query("SELECT * FROM roles")
            .then(function(result){
                console.log('\n')      
          console.table(result);
                console.log('\n')
                console.log('\n')
    
                console.log("Press the up or down arrow keys to continue")
        //   connection.end();
            })
            .catch(function(error){
    
                console.log(error)
            })
     
            return;
    
        };
    // create employee
    function createEmployee(connection, first_name, last_name, role_id, manager_id) {
        console.log("Inserting a new role...\n");
        // we're used to using values, but now we have SET and a ? placeholder, prevent SQL objection, prevent hackers from hacking into our SQL queries

      
         connection.query(
          "INSERT INTO employees SET ?",
          {
            first_name: first_name,
            last_name: last_name,
            role_id: role_id,
            manager_id: manager_id
          },
          )
          .then(function(result){
        //  console.log(result)
            console.log(result.affectedRows + " employee(s) inserted!\n")

            console.log('\n')
            console.log('\n')

            console.log("Press the up or down arrow keys to continue")
    
          })
          return;
     
      }
    // read employee
    function readEmployees(connection) {
        console.log("Selecting all roles...\n");
      // use connectionquery to execute a SQL query
      
        connection.query("SELECT * FROM employees")
            .then(function(result){
                console.log('\n')      
          console.table(result);
                console.log('\n')
                console.log('\n')
    
                console.log("Press the up or down arrow keys to continue")
        //   connection.end();
            })
            .catch(function(error){
    
                console.log(error)
            })
     
            return;
    
        };

    // update employee role
    function updateEmployeeRole(connection, role_id, id) {
        console.log("Updating employee role...\n");
        var query = connection.query(

          "UPDATE employees SET ? WHERE ?",
          [
            {
              role_id: role_id
            },
            {
              id: id
            }
          ],
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");

          }
        );
      

      }

// this particular module.exports exports all of the functions created in this file that are listed between its brackets. 
// I'm sure there's a better way to do this, but it works for now.
module.exports ={
    createDepartment: createDepartment,
    readDepartments: readDepartmnets,
    readRoles: readRoles,
    createRole: createRole,
    readEmployees: readEmployees,
    createEmployee: createEmployee,
    updateEmployeeRole: updateEmployeeRole
    // defineDepartmnetsArray: defineDepartmnetsArray
    }   