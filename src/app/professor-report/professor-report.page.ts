import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {QrcodeService} from '../services/qrcode.service';



@Component({
  selector: 'app-professor-report',
  templateUrl: './professor-report.page.html',
  styleUrls: ['./professor-report.page.scss'],
})
export class ProfessorReportPage implements OnInit {

  constructor( private router: Router,  private qrcodeService: QrcodeService) { }

    attendanceReport ;

  ngOnInit() {
    this.getReport();
  }
  viewDetailedAttendance(date) {
    this.router.navigate(['./professor-detailed-report', date]);
  }

  backToProfessorHomePage() {
    this.router.navigate(['./professor-homepage']);
  }
  getReport() {
    this.qrcodeService.getReport().subscribe(data => {
      this.attendanceReport = data;
    });
  }
  logout() {
    this.router.navigate(['./login']);
  }
}
