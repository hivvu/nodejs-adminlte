# What is it? 

This project can be seen as a starting template to send some endpoints that are managed with a backoffice.

It was built with **NodeJS**, **ExpressJS**, **Bootstrap 4**, **AdminLTE 3**, **Pug** and **MySQL**. 

## Features and ToDo List

* [x] Add, Edit and Delete data from DB with the use of the backoffice
* [x] Login and Logout
* [x] Endpoint to send data from the DB 
* [ ] Upload image example
* [ ] Manage login users in backoffice
* [ ] Store session for a period of time
* [ ] Forgot password
* [ ] Register

## How to use it? 

After cloning this repo, run the command: ```npm install```

Import the database that is inside the folder **db**, and don't forget to change your **connection settings** in ```app.js```

To run the project, run: ```npm start```

It will be available on port ```:3000``` and you can use ```teste@teste.pt``` and ```teste``` as password to login.

The example endpoint can be accessed in ```http://localhost:3000/api/customers```

### Links

[AdminLte](https://adminlte.io/)
