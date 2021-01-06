export class UserModel{
    constructor(
          public firstname: String,
          public lastname: String,
          public mobileno: String,
          public email: String,
          public password: String,
          public confpassword: String){}
  }