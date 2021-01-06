import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { AuthorModel } from "../authors/author.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  constructor(private libraryService: LibraryService, private router: Router) { }
  page:String = "Edit Author";    //Page Title
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
  editAuthor(){
    this.libraryService.editAuthor(this.authorItem);
    console.log("Edit author called");
    alert("Successfully Updated the Author");
    this.router.navigate(["authors"]);
  }

}
