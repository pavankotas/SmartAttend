import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import {Route, Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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
   this.loginService.authenticate(user).subscribe( (data) => {
     // @ts-ignore
     if (data.message === 'success') {
       // @ts-ignore
       console.log(data);
       // @ts-ignore
       localStorage.setItem('userID', data.userID);
       // @ts-ignore
       if (data.userType === 'admin') {
           this.router.navigate(['./professor-homepage']);
       } else {
          this.router.navigate(['./attendance-scanner']);
       }
     } else {
       // @ts-ignore
       console.log(data.message);
     }
   });
  }

}
