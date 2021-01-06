// Accessing Mongoose package
const mongoose = require("mongoose");

// Database connection
mongoose.connect("mongodb://localhost:27017/nglibrary"); 
const Schema = mongoose.Schema;

// Schema definition
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String 
});

// Model creation
var Bookdata = mongoose.model("bookdata",BookSchema);

// Exporting Model 
module.exports = Bookdata;