import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angular = "Angular"
  http = "Users"
 
  constructor(private userService: UserService) { }

  private user: any = {
    "id": 2,
    "name": "Junior Developer",
    "username": "junior",
    "email": "junior@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 123",
      "city": "Gwenborough",
      "zipcode": "92998-4783",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 52222",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  post: any = [];
  
  onGetUsers(): void{
    this.userService.getUsers().subscribe(
      (response) => this.post = response,
      (error: any) => console.log(error),
      () => console.log("Done getting users")
    );
  }

  onGetUser(): void{
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log("Done getting user")
    );
  }

  onCreateUser(): void{
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log("Done creating user")
    );
  }

  onUpdateUser(): void{
    this.userService.updateUser(this.user).subscribe(
      //(response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log("Done updating user")
    );
  }

  onPatchUser(): void{
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log("Done patching user")
    );
  }

  onDeleteUser(): void{
    this.userService.deleteUser(5).subscribe(
      (response) => console.log("Response from delete: ", response),
      (error: any) => console.log(error),
      () => console.log("Done deleting user")
    );
  }


  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
    this.onCreateUser();
    this.onUpdateUser();
    this.onPatchUser();
    this.onDeleteUser();
  }

}
