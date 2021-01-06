import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { LibraryComponent } from './library/library.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path:"books",component:BooksComponent},
  {path:"addbook",canActivate:[AuthGuard],component:AddbookComponent},
  {path:"book",component:BookComponent},
  {path:"editbook",component:EditbookComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"",component:LibraryComponent},
  {path:"authors",component:AuthorsComponent},
  {path:"author",component:AuthorComponent},
  {path:"editauthor",component:EditauthorComponent},
  {path:"addauthor",canActivate:[AuthGuard],component:AddauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
