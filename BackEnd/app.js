const express = require("express");

// Initializing express function
const app = new express();

//Product Model
// const Bookdata = require("./src/model/Bookdata"); 

//Cross Origin Resource Sharing which means you can access a backend API through angularjs ($http) if CORS is enabled in backend
const cors = require("cors"); 

//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. 
var bodyparser=require("body-parser");

// JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
// JWT.IO allows you to decode, verify and generate JWT.
const jwt=require("jsonwebtoken");

//*************************Data Models*************************************
const Bookdata = require("./src/model/Bookdata");
const Authordata = require("./src/model/Authordata");
const Userdata = require("./src/model/Userdata");
//**************************************************************************

// app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyparser.json());
app.use(express.static("./public"));

//*************List Books from DB Starts************************
app.get("/books",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // res.send("Books accessed");
    Bookdata.find()
    .then(function(books){
        res.send(books);
    });
});
//***************List Books from DB Ends***************************

//***************Add Book to DB Starts*****************************
app.post("/addbook", verifyToken, function(req,res){                //removed=>  verifyToken,
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    var item ={
        title: req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre,
        image: req.body.book.image,
    }
    var book = new Bookdata(item);
    book.save();
});
//*****************Add Book to DB Ends*****************************

//***********Display a book on Read-more & Editing-Form Starts********************/
app.get('/:id',  (req, res) => {
    // res.send("Book accessed");
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      })
})
//***********Display a book on Read-more & Editing-Form Ends********************/

//***********Book Editing Starts********************/
app.put("/editbook", verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    const id=req.body.book._id;
    // console.log(id);
    var item ={
        title: req.body.book.title,
        author: req.body.book.author,
        genre: req.body.book.genre,
        image: req.body.book.image,
    }
    // console.log(item);
    Bookdata.updateOne({_id: id},item,function(){
        res.send();
    });
});

//***********Book Editing Ends********************/

// ***********Delete a Book Starts************
app.delete('/delbook/:id', verifyToken, (req,res)=>{
   
    id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('Deleted the Book')
        res.send();
    })
  })
// ***********Delete a Book Ends************

//***************Add signup User to DB Starts*****************************
app.post("/adduser", function(req,res){                //removed=>  verifyToken,
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    var item ={
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname,
        mobileno: req.body.user.mobileno,
        email: req.body.user.email,
        password: req.body.user.password
    }
    var user = new Userdata(item);
    user.save();
});
//*****************Add signup User to DB Ends*****************************

//------------------Log in verification with DB Starts--------------------------
    // ................Middleware Function to very Token Starts.....................

function verifyToken(req,res,next){
    // console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request1")
    }
    let token=req.headers.authorization.split(' ')[1]  //gave space
    if(token=="null"){
        return res.status(401).send("Unauthorised request2")
    }
    let payload=jwt.verify(token,"secretKey")
    // console.log(payload)
    if(!payload){
        return res.status(401).send("Unauthorised request3")
    }
    req.userId=payload.subject
    next()
}
// ................Middleware Function to very Token Ends.....................


app.post("/login",(req,res)=>{
    let enteredData = req.body;
    console.log(enteredData)
    let enteredEmail = enteredData.email
    let enteredPassword = enteredData.password
    Userdata.findOne({"email":enteredEmail})
    .then((user=>{
        //   res.send(user);
        //   console.log(user)
        if (enteredEmail === "admin@gmail.com" && enteredPassword === user.password){
            let payload={subject:user._Id}
            let token=jwt.sign(payload,"secretKey")
            console.log("Admin Sign In Success");
            res.status(200).send({token})
        //    res.send({"firstname": user.firstname}); 
        }
        else if(enteredEmail !== user.email){
            res.status(401).send("Invalid Username")
        }
        else if(enteredPassword !== user.password){
            // res.status(401).send("Invalid Password")
            res.send({"error": "Entered Wrong Password"});
        }
        else{
            console.log("Success")
            res.send({"firstname": user.firstname});
           
        }
          
    }))
    .catch(function(){
        const emaildisplay = "Email ID not Registered";
        const display = "";
        console.log("Error Catched")
        res.send({"error": "Email ID not Registered"});
        
    })
 
})
//-----------------Log in verification with DB Ends----------------------

//*************List Authors from DB Starts************************
app.get("/list/authors",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // res.send("Authors accessed");
    Authordata.find()
    .then(function(authors){
        res.send(authors);
    });
});
//***************List Authors from DB Ends***************************

//***************Add Author to DB Starts*****************************
app.post("/addauthor", verifyToken, function(req,res){                //removed=>  verifyToken,
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    var item ={
        author: req.body.author.author,
        title: req.body.author.title,
        genre: req.body.author.genre,
        image: req.body.author.image,
    }
    var author = new Authordata(item);
    author.save();
});
//*****************Add Author to DB Ends*****************************

//***********Display an author on Read-more & Editing-Form Starts********************/
app.get('/author/:id',  (req, res) => {
    // res.send("Book accessed");
  
    const id = req.params.id;
      Authordata.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      })
})
//***********Display an author on Read-more & Editing-Form Ends********************/

//***********Author Editing Starts********************/
app.put("/editauthor", verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    const id=req.body.author._id;
    console.log(id);
    var item ={
        author: req.body.author.author,
        title: req.body.author.title,
        genre: req.body.author.genre,
        image: req.body.author.image,
    }
    // console.log(item);
    Authordata.updateOne({_id: id},item,function(){
        res.send();
    });
});

//***********Author Editing Ends********************/

// ***********Delete an Author Starts************
app.delete('/delauthor/:id', verifyToken,(req,res)=>{
   
    id = req.params.id;
    Authordata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
// ***********Delete an Author Ends************



// Listen on a port
app.listen(3000, function(){
    console.log("Listening to Port 3000");
});