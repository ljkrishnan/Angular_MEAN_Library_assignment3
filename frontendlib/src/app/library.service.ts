import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) {}
    //***********Display Books Starts********************//
    getBooks(){
      return this.http.get("http://localhost:3000/books")
    }
    //***********Display Books Ends*************************************************************//

    //***********Add a Book Starts******************************//
    newBook(item){
      return this.http.post("http://localhost:3000/addbook",{"book":item})
      .subscribe(data=>{console.log(data)}) 
    }
    //***********Add a Book Ends*********************************************************************//

     //***********Display a book on Read-more & Editing Starts********************/
    getBook(id:any){
      return this.http.get("http://localhost:3000/"+id);
    }
    //***********Display a book on Read-more & Editing Ends********************/

    //***********Editing Book Starts********************/
    editBook(item){
      console.log('client update')
      return this.http.put("http://localhost:3000/editbook",{"book":item})
      .subscribe(data=>{console.log(data)}) 
    }
    //**************Editing Book Ends***********************/

    //***********Delete a Book Starts********************/

    deleteBook(id:any){
      return this.http.delete("http://localhost:3000/delbook/"+id)
    }
    //***********Delete a Book Ends********************/

    //***********Add User signup Starts******************************//
    newUser(item){
      return this.http.post("http://localhost:3000/adduser",{"user":item})
      .subscribe(data=>{console.log(data)}) 
    }
    //***********Add User signup Ends*********************************************************************//

    //***********Display Books Starts********************//
    getAuthors(){
      return this.http.get("http://localhost:3000/list/authors")
    }
    //***********Display Books Ends*************************************************************//

    //***********Add an Author Starts******************************//
    newAuthor(item){
      return this.http.post("http://localhost:3000/addauthor",{"author":item})
      .subscribe(data=>{console.log(data)}) 
    }
    //***********Add an Author Ends*********************************************************************//

    //***********Display an Author on Read-more & Editing Starts********************/
    getAuthor(id:any){
    return this.http.get("http://localhost:3000/author/"+id);
    }
    //***********Display an Authoron Read-more & Editing Ends********************/

    //***********Editing Author Starts********************/
    editAuthor(item){
    console.log('Author update')
    return this.http.put("http://localhost:3000/editauthor",{"author":item})
    .subscribe(data=>{console.log(data)}) 
    }
    //**************Editing Author Ends***********************/

    //***********Delete a Author Starts********************/

    deleteAuthor(id:any){
    return this.http.delete("http://localhost:3000/delauthor/"+id)
    }
    //***********Delete a Author Ends********************/
    


}
