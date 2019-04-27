import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import {Route, Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {LoadingService} from '../services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailID: String = '';
  password: String = '';
  InvalidUser: Boolean = false;
  loading;
  constructor(private loginService: LoginService, private router: Router, private loadingService: LoadingService) { }
  ngOnInit() {
  }
  login() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
    this.loadingService.present('Please wait..');
   this.loginService.authenticate(user).subscribe( (data) => {
     this.loadingService.dismiss();
     console.log('Loading dismissed!');
     // this.loading.dismissAll();
     // @ts-ignore
     if (data.message === 'success') {
       this.InvalidUser = false;
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
       this.InvalidUser = true;
       // @ts-ignore
       console.log(data.message);
     }
   });
  }

}
