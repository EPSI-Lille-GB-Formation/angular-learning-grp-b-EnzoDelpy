import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService) {}

  ngOnInit(){
    var user = {
      id: 2,
      firstname: "toto",
      lastname: "admin",
      email: "admin@test.bidon",
      password: "admin",
      role: "ADMIN",
      books: []
  }; 

    this.userService.create(user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });

    this.userService.get(2).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }
}
