const mongoose = require("mongoose");
const carts = new mongoose.Schema(
  {
    pid:{type: mongoose.Schema.Types.ObjectId, ref: 'products' },
    uid: {
      type: mongoose.Schema.Types.ObjectId, ref: 'users' 
      
    },

   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("carts", carts);
