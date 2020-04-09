# Unit 12 MySQL Homework: Employee Tracker

## User Story
```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Current Status

The minimum requirements were met. You can view and add department, roles, and employees,
and you can update an employee's role. 

My current strcuture has one file called CRUD.js which holds all of the actual
create, read, and update files, 
and my index.js file has several functions full of inquirer prompts which ask the user for info.
Based on the user's choices, the CRUD functions are called, and the data is updated.

There is also a connection.js file, making most of this possible,
and a seeds.sql file to create the database and some test-able data. 
I chose superheroes for my data because why not?



## Furute Plans

Having now learned about ORMs and the double questionmark ??, 
I would like to refactor my CRUD file functions into:
one Create, one Read, and one Update, and pass in the name of the table when calling. 
That way I wouldn't have to repeat so much code and have a seperate function for every option.

Also, I'd like to utlize mysql join methods so the tables don't just show the role_id and department_id,
the what those IDs refer to. On that note, I'd like create an array of current departments, roles, and employees,
then instead of prompting the user for an ID number, the user could look at a list, select the option they want, 
and the associasted ID number could be populated without the user having to know it. 

Also, I would like to do the bonuses such as deleting an employee.




