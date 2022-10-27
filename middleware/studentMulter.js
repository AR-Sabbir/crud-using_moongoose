// require

const multer = require('multer');
const path = require('path');
const getSlug = require('../utility/getSlug');


const StudentMulter = () => {
    const studentDisk = multer.diskStorage({
        destination : (req,file,cb) =>{
            cb(null,path.join(__dirname,'../public/gallary'))
        },
        filename : (req,file,cb) => {
            cb(null,Date.now() + '_' + file.originalname )
        }
    });

    return multer({
    storage : studentDisk
}).single('photo')
}


// multer export
module.exports=StudentMulter