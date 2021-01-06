import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { BookModel } from "../books/book.model";
import { Router } from '@angular/router';   //Added for accessing Router class
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private libraryService: LibraryService, private router: Router, public authService: AuthService ) { }
  title:String = "Book";    //Page Title
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
  updatebook(){
    let bookId = localStorage.getItem("bookId")
    console.log(bookId);
    // alert("Successfully Updated the Book");
    this.router.navigate(["editbook"]);
  }

    //Delete a Book function Starts
    deleteBook(){
      
      let bookId = localStorage.getItem("bookId")
      console.log(bookId);
      this.libraryService.deleteBook(bookId)
        .subscribe((data) => {
          console.log(data);
        })
        // alert("Deleted");
      alert("Successfully Deleted the Book");
      this.router.navigate(["books"]);
    }
    //Delete a Book function Ends

}
