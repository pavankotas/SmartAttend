import { Component, OnInit } from '@angular/core';

import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Socket} from 'ng-socket-io';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


import {QrcodeService} from '../services/qrcode.service';


@Component({
  selector: 'app-attendance-scanner',
  templateUrl: './attendance-scanner.page.html',
  styleUrls: ['./attendance-scanner.page.scss'],
})
export class AttendanceScannerPage implements OnInit {

  encodeData: any;
  scannedData: {};
  response: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  courses: {};
  message = '';
  toID = '';
  sendMessage() {
    this.socket.emit('Message', {message: this.message, toID: this.toID, from: localStorage.getItem('userID')});
  }


  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private barcodeScanner: BarcodeScanner,
      private  socket: Socket,
      private router: Router,
      public alertController: AlertController,
      private qrcodeService: QrcodeService
   ) {
    this.initializeApp();
    // Course data
    this.courses = [ {
      stream : 'Computer Science',
      coursecode: '5525 0001 Cloud Computing',
      semesteryear: '2019 Spring Semester',
      attendance: 'NA'
    }
    ];
    // Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.socket.on('Message', (data) => {
      console.log(data);
    });
    this.socket.connect();
    console.log(localStorage.getItem('userID'));
    this.socket.emit('set-username', localStorage.getItem('userID'));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.encodeData = 'https://www.FreakyJolly.com';
    });
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Bar Code Scanned');
      const attendance = {
        studentEmailID : localStorage.getItem('userID'),
        courseID: 'CS5525',
        qrCode : barcodeData.text
      };
      console.log(attendance);
      this.qrcodeService.checkin(attendance).subscribe(data => {
        // @ts-ignore
        this.response = data.message;
        this.presentAlert();
      });
    }).catch(err => {
      console.log('Error', err);
    });
  }
  getReport() {
    this.router.navigate(['./student-report']);
  }

  encodedText() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }
  logout() {
    this.router.navigate(['./login']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attendance',
      subHeader: '',
      message: 'Checked in successfully',
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
