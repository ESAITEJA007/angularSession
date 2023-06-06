export class User {
  Name: string = '';
  Email: string = '';
  Password: string = '';
  DoB: Date = new Date();

  constructor(name : string, email: string, pass: string, doB: Date) {
   this.Name = name;
   this.Email = email;
   this.Password = pass;
   this.DoB = doB;
  }
}
