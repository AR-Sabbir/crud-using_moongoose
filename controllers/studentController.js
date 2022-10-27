
const User =require('../models/user');




// student controllers

const getAllStudent = async (req,res) => {
    const studentData =await User.find();
    
    res.render('index',{studentData})


}
// student create

const crateStudent =async (req,res) => {
    const {name,email,phone,photo,location,gender,} = req.body;
        
    // has file
    let image = "";
    if (req.file) {
        image = req.file.filename;
        
    } else {
        image = ""
    }
    
    // making data
    const getData ={
        name : name,
        email :email,
        gender : gender,
        photo :image,
        location : location,
        phone : phone
    }
    

   await User.create(getData)
    res.redirect('/')


}


// Student Delete

const deleteStudent =async (req,res) => {
    // delete id
     const deleteId = req.params;
    
   const hello =await User.deleteOne(deleteId)
   

   res.redirect('/')
}
// Student View


const viewStudent =async (req,res) => {
    // view id
     const viewId = req.params;
   
   const singleId =await User.findOne(viewId);
   console.log(singleId);


   res.render('singleView',{singleId})
}


// Student edit


const editStudent =async (req,res) => {
    const editID = req.params;
    

    const editData =await User.findOne(editID);

    

    res.render('update',{editData})
}
// Student Update


const updateStudent= async (req,res) =>{

    const { id } = req.params;

    const {name , email , phone , gender , photo , location} = req.body;

    const updateData = {
        name : name,
        email : email,
        phone : phone,
        gender : gender,
        photo : req.file ? req.file.filename : "",
        location : location
    }

    await User.updateOne({ _id : id } , updateData);

    res.redirect('/');

}

// module export

module.exports ={

    getAllStudent,
    crateStudent,
    deleteStudent,
    updateStudent,
    viewStudent,
    editStudent
}