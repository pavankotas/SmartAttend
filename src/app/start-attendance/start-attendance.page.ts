import { Component, OnInit } from '@angular/core';
import {Socket} from 'ng-socket-io';
import { QrcodeService} from '../services/qrcode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-attendance',
  templateUrl: './start-attendance.page.html',
  styleUrls: ['./start-attendance.page.scss'],
})
export class StartAttendancePage implements OnInit {

  public QRCode: string = null;
  public task: any;
  constructor( private  socket: Socket, private qrService: QrcodeService, private router: Router) {
      this.socket.connect();
      this.socket.emit('set-username', localStorage.getItem('userID'));
      this.refreshData();
      this.registerQRCode();
      const self = this;
      // this.task = setInterval(function () {
      //   self.refreshData();
      //   }, 10000);
      this.socket.on('Message', (data) => {
          console.log(data);
          if (data.event === 'regenerate') {
              this.refreshData();
              this.registerQRCode();
          }
      });
  }
    endSession() {
        this.router.navigate(['./professor-homepage']);
    }
  refreshData() {
    this.QRCode = (Math.floor((Math.random() * 100000000) + 1)).toString();
  }
  registerQRCode() {
      const qrcode = {
          qrCode: this.QRCode,
          createdBy: localStorage.getItem('userID')
      }
      this.qrService.addQRCode(qrcode).subscribe(data => {
          console.log(data);
      });
  }
  ngOnInit() {
  }
}
