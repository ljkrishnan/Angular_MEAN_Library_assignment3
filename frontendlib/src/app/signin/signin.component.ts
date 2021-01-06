import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  page:String = "Sign In";    //Page Title
  user={
    email:"",
    password:"",
  }
  emaildisplay=""
  error=""
  displayuser="Admin"
  
  // error = localStorage.getItem("error");  //For displaying Log in error

  ngOnInit(): void {}
  loginUser(user){
    localStorage.setItem("useremail", user.email.toString());
    this.authService.loginUser(this.user)
    .subscribe(res=>{
      localStorage.setItem("token",res.token)
      localStorage.setItem("error",res.error)
      // localStorage.setItem("username",res.firstname)
      if(res.firstname==undefined){
        localStorage.setItem("username",this.displayuser)
      }
      else{
        localStorage.setItem("username",res.firstname)
        localStorage.removeItem("token")
      }
      
      if(res.error==undefined){
        // this.error = ""
        localStorage.removeItem("error")
        this.router.navigate(["/books"])
      }
      else{
        this.router.navigate(["/login"])
        this.error = localStorage.getItem("error");
      }
      
    })
  }

}
