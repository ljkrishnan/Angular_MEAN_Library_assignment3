import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookComponent } from './book/book.component';
import { EditbookComponent } from './editbook/editbook.component';
import { SignupComponent } from './signup/signup.component';
import { CustomFieldvalidatorDirective } from './shared/custom-fieldvalidator.directive';
import { SigninComponent } from './signin/signin.component';
import { LibraryComponent } from './library/library.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { AuthService } from "./auth.service";    //AuthService Imported
import { TokenInterceptorService } from "./token-interceptor.service";
import { LibraryService } from "./library.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    AddbookComponent,
    BookComponent,
    EditbookComponent,
    SignupComponent,
    CustomFieldvalidatorDirective,
    SigninComponent,
    LibraryComponent,
    AuthorsComponent,
    AuthorComponent,
    AddauthorComponent,
    EditauthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, LibraryService,   //AuthService & ProductService Added
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
