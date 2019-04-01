import { Component, OnInit } from '@angular/core';

import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Socket} from 'ng-socket-io';

@Component({
  selector: 'app-attendance-scanner',
  templateUrl: './attendance-scanner.page.html',
  styleUrls: ['./attendance-scanner.page.scss'],
})
export class AttendanceScannerPage implements OnInit {

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

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
      private  socket: Socket
   ) {
    this.initializeApp();

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
      alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  encodedText() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  ngOnInit() {
  }

}
