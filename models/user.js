const mongoose = require("mongoose");
const path = require("path");
const schema = mongoose.Schema;

const studentSchema = new schema({
  fullname:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require:true
  },
  studentno:{
    type:Number,
    require:true
  },
  balance:{
    type:Number,
    default:0
  }
})

module.exports = mongoose.model("users",studentSchema);