const express = require('express');
const {getAllStudent,crateStudent, deleteStudent, updateStudent, viewStudent, editStudent }= require('../controllers/studentController');
const StudentMulter = require('../middleware/studentMulter');


// iniit route

const studentRouter = express.Router();


// routing
studentRouter.route('/').get(getAllStudent).post(StudentMulter(),crateStudent);
studentRouter.route('/delete/:id').get(deleteStudent);
studentRouter.get('/view/:id',viewStudent);
studentRouter.route('/edit/:id').get(editStudent).post(StudentMulter(),updateStudent);




// export route

module.exports=studentRouter; 