import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { AuthorModel } from "./author.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router) { }
  title:String = "Authors";    //Page Title

  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page
  
  //ProductModel is a model class for a product item
  authors: AuthorModel[];
  
  //Display an author by Redirecting
  listauthor(author){
    localStorage.setItem("authorId", author._id.toString());
    this.router.navigate(["author"]);
  }
  

  ngOnInit(): void {
     //Calling getAuthors() and loading the authors to authors array
     this.libraryService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })
  }

}
