const mongoose = require("mongoose");
const orders = new mongoose.Schema(
  {
    // pid:{
    //     type: String,
    // },
    // uid: {
    //   type: String,
      
    // },

    pid:{type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    uid: {
      type: mongoose.Schema.Types.ObjectId, ref: 'users' 
      
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orders);
