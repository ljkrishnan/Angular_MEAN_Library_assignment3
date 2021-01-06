// const express = require("express");
// const adminRouter = express.Router();
// const Bookdata = require("../model/Bookdata");
// const Authordata = require("../model/Authordata");
// const mongoose = require("mongoose");

// Signin/SignUp Page email & Password Validation Starts
let email=document.getElementById("emailId");
let pwd=document.getElementById("pwdId");
let cpwd=document.getElementById("cpwdId");
let mobempty=document.getElementById("MobNo");
let error=document.getElementById("errorId");
let regexp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

// Signin Page email & Password Basic Validation Starts
function validationSin() {
    if(emailId.value =="admin"){
        error.innerHTML = "<b>Valid</b>";
        error.style.color = "black";
        // alert("Valid Email ID"); 
        return true;
            }                                        
    else if(email.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        // alert("Fields marked ' * ' Cannot Be Empty");
        error.innerHTML = "<b>Field Cannot be empty.</b>";
        error.style.color = "orange";  
        return false;
    }
    else if(regexp.test(emailId.value)){
        error.innerHTML = "<b>Valid</b>";
        error.style.color = "black";
        // alert("Valid Email ID"); 
        return true;
            }
    else{
        // alert("Invalid Email ID");
        error.innerHTML = "<b>Invalid Email ID. Please Retry.</b>";
        error.style.color = "orange"; 
        return false;
       
    }                                                          
    
}

let SpwdRegexp=/^([A-Z]+)([a-z]+)([0-9]+)$/
let Sperror=document.getElementById("SperrorId");

function pwdvalidationSin(){
    if(pwd.value === "admin"){
        Sperror.innerHTML = "<b>Valid</b>";
        Sperror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else if(pwd.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        // alert("Fields marked ' * ' Cannot Be Empty");
        Sperror.innerHTML = "<b>Field Cannot be empty.</b>";
        Sperror.style.color = "orange"; 
        return false;
    }
    else if(pwd.value.length < 8){
        Sperror.innerHTML = "<b>Require atleast 8 characters.</b>";
        Sperror.style.color = "orange";
        return false;
    }

    else if(SpwdRegexp.test(pwd.value)){
        Sperror.innerHTML = "<b>Valid</b>";
        Sperror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        Sperror.innerHTML = "<b>Require atleast one Uppercase letter, one Lowercase letter & one Number.</b>";
        Sperror.style.color = "orange";
        // alert("Password must be atlease 8 character long, also contain atleast one uppercase letter, one lowercase letter & one number."); 
        return false;
        
    }
}
// Signin Page email & Password Basic Validation Ends

// *******************************************************************************************************************

// SignUp Page email & Password Validation Starts
function validation() {                                        //Basic Validation Starts
    if(email.value.trim()==""||pwd.value.trim()==""||cpwd.value.trim()==""||mobempty.value.trim()==""||Finame.value.trim()==""||Laname.value.trim()==""){         //trim() function to eleminate white spaces before and after text
        alert("Fields Cannot Be Empty"); 
        return false;
    }
    else if(regexp.test(emailId.value)){
        error.innerHTML = "<b>Valid</b>";
        error.style.color = "black";
        // alert("Valid Email ID"); 
        return true;
            }
    else{
        // alert("Invalid Email ID");
        error.innerHTML = "<b>Invalid Email ID. Please Retry.</b>";
        error.style.color = "orange"; 
        return false;
    } 
}

// SignUp Page email & Password Validation Ends

// Signin/SignUp Page email & Password Validation Ends

// SignUp Page mobile no Validation Starts

let mob=document.getElementById("MobNo");
let mobRegexp=/^([0-9]{3})([\ \.\-]+)?([0-9]{3})([\ \.\-]+)?([0-9]{4})$/
let merror=document.getElementById("merrorId");

function mobvalidation() {  

    if (mobRegexp.test(mob.value)){
        merror.innerHTML = "<b>Valid</b>";
        merror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        merror.innerHTML = "<b>Invalid Mobile No.</b>";
        merror.style.color = "orange"; 
        return false;
        
    }
  
}

// SignUp Page mobile no Validation Ends



// SignUp Page Password Format Validation Starts

let pwdver=document.getElementById("pwdId");
//  let pwdRegexp=/^([0-9]{3})([\ \.\-]+)?([0-9]{3})([\ \.\-]+)?([0-9]{4})$/
let pwdRegexp=/^([A-Z]+)([a-z]+)([0-9]+)$/
let perror=document.getElementById("perrorId");


function pwdvalidation() { 
    
    if(pwdver.value.length < 8){
        perror.innerHTML = "<b>Atleast 8 character</b>";
        perror.style.color = "orange";
        return false;
    }

    else if(pwdRegexp.test(pwdver.value)){
        perror.innerHTML = "<b>Valid</b>";
        perror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        perror.innerHTML = "<b>Invalid Format.</b>";
        perror.style.color = "orange";
        alert("Password must be atlease 8 character long, also contain atleast one uppercase letter, one lowercase letter & one number."); 
        return false;
        
    }
  
}
// SignUp Page Password Format Validation Ends

// SignUp Page Password & confirm Password Validation Starts
let cperror=document.getElementById("cperrorId");
function pwdmismatch(){
    if(pwd.value == cpwd.value){
        return true;
    }          

    else{
        cperror.innerHTML = "<b>Password mismatch.</b>";
        cperror.style.color = "orange";
        // alert("Password mismatch");
        return false;
    }
}
// SignUp Page Password & confirm Password Validation Ends

// SignUp Page First name & Last Validation Starts
let Finame=document.getElementById("Fname");
let Laname=document.getElementById("Lname");
let nameRegexp=/^([A-Za-z]+)$/
let Ferror=document.getElementById("FerrorId");
let Lerror=document.getElementById("LerrorId");

function Fnamevalidation() { 
    
    if(Finame.value.length < 3){
        Ferror.innerHTML = "<b>Atleast 3 characters</b>";
        Ferror.style.color = "orange";
        return false;
    }

    else if(nameRegexp.test(Finame.value)){
        Ferror.innerHTML = "<b>Valid</b>";
        Ferror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        Ferror.innerHTML = "<b>Invalid Name.</b>";
        Ferror.style.color = "orange";
        return false;
    }
}
function Lnamevalidation() { 
    
    if(Laname.value.length < 3){
        Lerror.innerHTML = "<b>Atleast 3 characters</b>";
        Lerror.style.color = "orange";
        return false;
    }

    else if(nameRegexp.test(Laname.value)){
        Lerror.innerHTML = "<b>Valid</b>";
        Lerror.style.color = "black";
        // alert("Valid Mobile Number");
        return true;
    }
    else{
        Lerror.innerHTML = "<b>Invalid Name.</b>";
        Lerror.style.color = "orange";
        return false;
    }
}

// Password Meter Starts
let textDisp=document.getElementById("meterText");
let meterBody=document.getElementById("meterEmpty");
// let meterRegexp1=/^([A-Z]+)([a-z]+)([0-9]+)$/
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger(){
    if(regExpStrong.test(pwd.value) & pwdver.value.length > 10){
        textDisp.innerHTML = "<b>STRONG</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "green";
        return true;
    }
    else if(regExpMedium.test(pwd.value) & pwdver.value.length > 8){
        textDisp.innerHTML = "<b>MEDIUM</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "orange";
        return true;
    }
    else if(regExpWeak.test(pwd.value)){
        textDisp.innerHTML = "<b>WEAK</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "RED";
        return true;
    }
    else{
        textDisp.innerHTML = "<b>Password Strength Meter</b>";
        textDisp.style.color = "black";
        meterBody.style.background = "grey";
        return true;
    }
}

// Password Meter Ends
// *******************************************************************************************************************
// For Log out - Starts
function logoff(){
    location.replace("/");
}
// For Log out - Ends


// Add Book Form validation
let title=document.getElementById("titleId");
let titleDisp=document.getElementById("terrorId");
let titleRegexp=/^([A-Za-z]+)([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?([\ \.\']+)?([A-Za-z]+)?$/
function titleValidation() { 
    
    if(title.value.length < 3){
        titleDisp.innerHTML = "<b>Atleast 3 characters</b>";
        titleDisp.style.color = "orange";
        return false;
    }

    else if(titleRegexp.test(title.value)){
        titleDisp.innerHTML = "<b>Valid</b>";
        titleDisp.style.color = "black";
        return true;
    }
    else{
        titleDisp.innerHTML = "<b>Invalid Title.</b>";
        titleDisp.style.color = "orange";
        return false;
    }
}

// Author Validation Starts
let author=document.getElementById("authorId");
let authorDisp=document.getElementById("aerrorId");
let authorRegexp=/^([A-Za-z]+)([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?([\ \.]+)?([A-Za-z]+)?$/
function authorValidation() { 
    
    if(author.value.length < 3){
        authorDisp.innerHTML = "<b>Atleast 3 characters</b>";
        authorDisp.style.color = "orange";
        return false;
    }

    else if(authorRegexp.test(author.value)){
        authorDisp.innerHTML = "<b>Valid</b>";
        authorDisp.style.color = "black";
        return true;
    }
    else{
        authorDisp.innerHTML = "<b>Invalid Author Name.</b>";
        authorDisp.style.color = "orange";
        return false;
    }
}
// Author Validation Ends

// Genre Validation Starts
let genre=document.getElementById("genreId");
let genreDisp=document.getElementById("gerrorId");
let genreRegexp=/^([A-Za-z]+)$/
function genreValidation() { 
    
    if(genre.value.length < 3){
        genreDisp.innerHTML = "<b>Atleast 3 characters</b>";
        genreDisp.style.color = "orange";
        return false;
    }

    else if(genreRegexp.test(genre.value)){
        genreDisp.innerHTML = "<b>Valid</b>";
        genreDisp.style.color = "black";
        return true;
    }
    else{
        genreDisp.innerHTML = "<b>Invalid genre.</b>";
        genreDisp.style.color = "orange";
        return false;
    }
}
// Genre Validation Ends

// Image Upload Validation Starts
var a = 1;

let imgDisp=document.getElementById("ierrorId");

function changea(){
     a = 0;
}

function imgValidation(){
    let inputField=document.getElementById("imgId");
    let file=inputField.files;
    // console.log(file);
    // console.log(file[0].type);
    if(a == 1){
        imgDisp.innerHTML = "<b>Upload an Image</b>";
        imgDisp.style.color = "orange"
        return false;
    }
    else if (file[0].type === 'image/gif'||'image/jpeg' || 'image/png'){
        imgDisp.innerHTML = "<b>Valid</b>";
        imgDisp.style.color = "black"
        return true;

    }
    else{
        imgDisp.innerHTML = "<b>Upload an Image</b>";
        imgDisp.style.color = "orange";
        return false;
    }
}
// Image Upload Validation Ends

// ***********-----------****************---------------*****************------------------



