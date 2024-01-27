const mongoose = require('mongoose');




  const usertypes= new mongoose.Schema({
    usertype: {
              type: String
            
          },
          
      
   
      }, {
    timestamps: true,
  });



  module.exports = mongoose.model("usertypes", usertypes);
 