const { create } = require('domain')
const mongoose = require('mongoose')




// create schema

const userSchema = mongoose.Schema({
    name : {
        type : String,
        
        trim : true
    } ,
    
    
    gender : {
        type : String,
        // required : true,
       
    },
    email : {
        type : String,
       
        trim : true
    },
    phone : {
        type : String,
        
    },
    photo :String,
    location : {
        type : String,
        required : true,
        trim : true
    }

},{
    timestamps: true
})



// create colletion

module.exports=mongoose.model('User',userSchema)