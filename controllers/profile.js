const user = require("../models/user");
const Student = require("../models/user");


exports.profile = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const student = await Student.findById(userid);
    if(!student)
    {
      const error = new Error("Student is not registered !!");
        error.statusCode = 400;
        throw error;
    }
    return res.status(201).json({ profile: student });
  }
  catch (err){
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.buy = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const {amount} = req.body;
    const student = await Student.findById(userid);
    if(!student)
    {
      const error = new Error("Student is not registered !!");
        error.statusCode = 400;
        throw error;
    }
    if(amount>student.balance)
    {
      const error = new Error("Not enough balance !!");
      error.statusCode = 400;
      throw error;
    }
    return res.status(201).json({ profile: student });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}
