


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
        console.log(result.affectedRows + " depos inserted!\n")
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


    // Create role

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

    // read employee

    // update employee role?

module.exports ={
    createDepartment: createDepartment,
    readDepartments: readDepartmnets,
    readRoles: readRoles
    }   