import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { AuthorModel } from "../authors/author.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private libraryService: LibraryService, private router: Router) { }
  page:String = "Add Author";    //Page Title
  authorItem= new AuthorModel(null,null,null,null);
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page

  ngOnInit(): void {
  }
  AddAuthor(){
    this.libraryService.newAuthor(this.authorItem);
    console.log("called");
    alert("Successfully Added the Author");
    this.router.navigate(["authors"]);
  }

}
