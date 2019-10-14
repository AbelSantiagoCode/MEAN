const express = require('express');
const path = require('path');
const morgan = require('morgan');// to see logs and messages in the terminal
const {mongoose} = require('./database');//calling the connection to the database
const cors = require('cors');

//Initializations
const app = express();

//Setting
app.set('port',process.env.PORT||3000);// set the port of the connection

//Middlewares
app.use(morgan('dev'));
app.use(express.json());//to undestand json data from client.
app.use(cors({origin:'http://localhost:4200'}));
//Global Variables

//Routes
app.use(require('./routes/index'));
app.use('/api/employees',require('./routes/employees.routes'));

//Static Files

//Server is listening
app.listen(app.get('port'),()=>{
  console.log('Server on port',app.get('port'));
});
