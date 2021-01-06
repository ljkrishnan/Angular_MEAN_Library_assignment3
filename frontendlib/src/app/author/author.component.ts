import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { AuthorModel } from "../authors/author.model";
import { Router } from '@angular/router';   //Added for accessing Router class
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router, public authService: AuthService ) { }
  title:String = "Author";    //Page Title
  authorItem= new AuthorModel(null,null,null,null);
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page

  ngOnInit(): void {
    let authorId = localStorage.getItem("authorId")
    console.log(authorId);
    this.libraryService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
    })
  }
  updateauthor(){
    let authorId = localStorage.getItem("authorId")
    console.log(authorId);
    // alert("Successfully Updated the Author");
    this.router.navigate(["editauthor"]);
  }

      //Delete an Author function Starts
      deleteAuthor(){
      
        let authorId = localStorage.getItem("authorId")
        console.log(authorId);
        this.libraryService.deleteAuthor(authorId)
          .subscribe((data) => {
            console.log(data);
          })
          // alert("Deleted");
        alert("Successfully Deleted the Author");
        this.router.navigate(["authors"]);
      }
      //Delete an Author function Ends



}
