const mongoose = require("mongoose");
const products = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },

    price: {
      type: String,
    },

    quantity: {
      type: Number
    },
    description: {
      type: String
    },
   pimage:{
    type:String
   },
   sid: {
    type: mongoose.Schema.Types.ObjectId, ref: 'users' 
  },
   
  deleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("products", products);
