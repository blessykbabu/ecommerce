// // import mongoose from "mongoose";
const mongoose = require("mongoose");
const users = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    district: {
      type: String,
    },
   category:{
    type: String
   },
   address: {
    type: String
  },
    password: {
      type: String
    },
    usertype: { 
      type: mongoose.Schema.Types.ObjectId,
       ref: "usertypes"
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

module.exports = mongoose.model("users", users);
