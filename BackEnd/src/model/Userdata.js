// Accessing Mongoose package
const mongoose = require("mongoose");

// Database connection
mongoose.connect("mongodb://localhost:27017/nglibrary"); 
const Schema = mongoose.Schema;

// Schema definition
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    mobileno: String,
    email: String,
    password: String  
});

// Model creation
var Userdata = mongoose.model("userdata",UserSchema);

// Exporting Model 
module.exports = Userdata;