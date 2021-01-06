import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { BookModel } from "../books/book.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router ) { }
  page:String = "Edit Book";    //Page Title
  bookItem= new BookModel(null,null,null,null);
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page
  displayuser = localStorage.getItem("username"); //For displaying User on top of page

  ngOnInit(): void {
    let bookId = localStorage.getItem("bookId")
    console.log(bookId);
    this.libraryService.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
    })
  }
  editBook(){
    this.libraryService.editBook(this.bookItem);
    console.log("called");
    alert("Successfully Updated the Book");
    this.router.navigate(["books"]);
  }

}
