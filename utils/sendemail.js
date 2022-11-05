const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PSWD
    }
})

    exports.sendEmail =(email,otp)=>{
      transporter.sendMail({
        to:email,
        from:process.env.EMAIL,
        subject:'Verification OTP',
        html:`<h4>Hello student,</h4>
        <br>Please use this One time password for verification.<br>
        OTP:${otp}<br>
        Do not share it with anyone.<br>
        <h5>Thanks ,<br>Team FeeFund</h5>`
      })
    }
    