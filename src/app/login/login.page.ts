import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailID: String = '';
  password: String = '';
  InvalidUser = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
   this.loginService.getUsers(user).subscribe( (data) => {
     // @ts-ignore
     if (data.message === 'Success') {
       this.router.navigate(['./professor-homepage']);
       // @ts-ignore
       console.log(data.message);
     } else {
       // @ts-ignore
       console.log(data.message);
     }
   });
  }

}
