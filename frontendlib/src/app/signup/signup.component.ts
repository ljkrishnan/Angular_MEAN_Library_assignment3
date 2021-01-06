import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { UserModel } from "./user.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router) { }
  page:String = "Sign Up";    //Page Title
  userItem= new UserModel(null,null,null,null,null,null);

  ngOnInit(): void {
  }

  addUser(){
    this.libraryService.newUser(this.userItem);
    console.log("called");
    alert("You Have Successfully Signed Up. Now Please Log In.");
    this.router.navigate(["/signin"]);
  }

}
