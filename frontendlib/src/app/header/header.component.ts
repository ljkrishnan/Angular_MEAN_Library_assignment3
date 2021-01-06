import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   //Added for accessing Router class
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public authService:AuthService) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem("token")
    // localStorage.removeItem("editProductId")
    localStorage.removeItem("authorId")
    localStorage.removeItem("bookId")
    localStorage.removeItem("username")
    // localStorage.removeItem("dispuser")
    localStorage.removeItem("useremail")
    localStorage.removeItem("error")
    this.router.navigate(["/"])
  }

}
