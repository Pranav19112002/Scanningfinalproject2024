const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
 name : String,   
 email : String,
 password: String,
 cpassword: String,
});


const usermodel = mongoose.model("users",userschema)
module.exports = usermodel