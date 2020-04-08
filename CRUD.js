


function createDepartment(connection, departmentName) {
    console.log("Inserting a new depo...\n");
    // we're used to using values, but now we have SET and a ? placeholder, prevent SQL objection, prevent hackers from hacking into our SQL queries
    // the first arg is the INSERT
    // The second arg is the values
  
     connection.query(
      "INSERT INTO departments SET ?",
      {
        department_name: departmentName,

      })
      .then(function(result){
    //  console.log(result)
        console.log(result.affectedRows + " depo(s) inserted!\n")
        // Call updateProduct AFTER the INSERT completes
        // updateProduct();

        // .catch (function(error){

        //     console.log(error)
        // }) 
  

      })
      return;
 
  }


  function readDepartmnets(connection) {
    console.log("Selecting all depos...\n");
  // use connectionquery to execute a SQL query
  // use a select statement to return all cols from the product table
  
    connection.query("SELECT * FROM departments")
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

    // function defineDepartmnetsArray(connection) {
    //   // use connectionquery to execute a SQL query
    //   // use a select statement to return all cols from the product table
      
    //     connection.query("SELECT * FROM departments")
    //         .then(function(result){
    //             var depoArray=[];
    //             for (i=0; i<result.length; i++){
    //             depoArray.push(result[i].department_name)
    //             }
    //     //   connection.end();
    //         })
    //         .catch(function(error){
    
    //             console.log(error)
    //         })   
    //         return depoArray;
    
    //     };
    // Create role
    function createRole(connection, role_title, role_salary, depo_id) {
        console.log("Inserting a new role...\n");
        // we're used to using values, but now we have SET and a ? placeholder, prevent SQL objection, prevent hackers from hacking into our SQL queries
        // the first arg is the INSERT
        // The second arg is the values
      
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
            // Call updateProduct AFTER the INSERT completes
            // updateProduct();
    
            // .catch (function(error){
    
            //     console.log(error)
            // }) 
            console.log('\n')
            console.log('\n')
    
          })
          return;
     
      }
    // read role
    function readRoles(connection) {
        console.log("Selecting all roles...\n");
      // use connectionquery to execute a SQL query
      // use a select statement to return all cols from the product table
      
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
        // the first arg is the INSERT
        // The second arg is the values
      
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
            // Call updateProduct AFTER the INSERT completes
            // updateProduct();
    
            // .catch (function(error){
    
            //     console.log(error)
            // }) 
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
      // use a select statement to return all cols from the product table
      
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

    // update employee role?
    function updateEmployeeRole(connection, role_id, id) {
        console.log("Updating employee role...\n");
        var query = connection.query(
          // we have two ?s here
          // quanity replaces the first
          // flavor replaces the second
          // don't want to use template literals here
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
            // Call deleteProduct AFTER the UPDATE completes
            // deleteProduct();
          }
        );
      
        // logs the actual query being run
        // console.log(query.sql);
      }


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