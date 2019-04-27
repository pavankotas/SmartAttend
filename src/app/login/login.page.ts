import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login.service';
import {Route, Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import { LoadingController} from '@ionic/angular';

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
  constructor(private loginService: LoginService, private router: Router, private loadingController: LoadingController) { }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait..'
    });
    await this.loading.present();


  }
  ngOnInit() {
  }
  login() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
    this.presentLoading();
   this.loginService.authenticate(user).subscribe( (data) => {
     this.loading.dismiss();
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
