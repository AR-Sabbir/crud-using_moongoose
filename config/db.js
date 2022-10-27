const mongoose = require('mongoose');


// mongoDb connection

const mongoDBConnetion = async () => {

   try {
    const connect = mongoose.connect(`mongodb://localhost/student`)
    console.log('mongoose connection succecfull'.bgBlue.black);
   } catch (error) {
    console.log(`${error.massage}`.bgRed.black);
   }
}

// export

module.exports=mongoDBConnetion;