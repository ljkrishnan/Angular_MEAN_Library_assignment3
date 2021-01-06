import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { BookModel } from "../books/book.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router ) { }
  page:String = "Add Book";    //Page Title
  bookItem= new BookModel(null,null,null,null);
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page

  ngOnInit(): void {
  }
  AddBook(){
    this.libraryService.newBook(this.bookItem);
    console.log("called");
    alert("Successfully Added the Book");
    this.router.navigate(["books"]);
  }

}
