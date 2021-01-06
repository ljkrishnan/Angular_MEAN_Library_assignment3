import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { BookModel } from "./book.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private libraryService:LibraryService, private router:Router ) { }
  title:String = "Books";    //Page Title
 
  useremail = localStorage.getItem("useremail");  //For displaying email ID on top of page

  displayuser = localStorage.getItem("username"); //For displaying User on top of page
  
  
  //ProductModel is a model class for a product item
  books: BookModel[];
  
  //Display a book by Redirecting
  listbook(book){
    localStorage.setItem("bookId", book._id.toString());
    this.router.navigate(["book"]);
  }
  

  ngOnInit(): void {
      //Calling getBooks() and loading the books to books array
      this.libraryService.getBooks().subscribe((data)=>{
        this.books=JSON.parse(JSON.stringify(data));
        console.log(this.books);
      })
  }

}
