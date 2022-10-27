// require section
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const colors = require('colors');
const studentRouter = require('./routes/studentsRoute');
const mongoDBConnetion = require('./config/db');



// express init 
const app = express();

// environment setup
dotenv.config();
const PORT = process.env.PORT || 4040;

// data manage 
app.use(express.json());
app.use(express.urlencoded({extended :false}));

// static folder
app.use(express.static('public'))

// ejs init

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout','layout/app');

// routes

app.use(studentRouter)




// server listen
app.listen(PORT, () => {
    mongoDBConnetion()
    console.log(`server is running on port ${PORT}`.bgGreen.white);
})