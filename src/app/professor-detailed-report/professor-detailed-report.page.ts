import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {QrcodeService} from '../services/qrcode.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-professor-detailed-report',
  templateUrl: './professor-detailed-report.page.html',
  styleUrls: ['./professor-detailed-report.page.scss'],
})
export class ProfessorDetailedReportPage implements OnInit {

  constructor(private router: Router, private qrcodeService: QrcodeService, private activatedRoute: ActivatedRoute) { }
  date;
  detailedReport;

  ngOnInit() {
    this.date = this.activatedRoute.snapshot.paramMap.get('date')
    this.getDetailedReport(this.date);
  }
  backToProfessorReportPage() {
    this.router.navigate(['./professor-report']);
  }
  getDetailedReport(date) {
    this.qrcodeService.getDetailedReport(date).subscribe(data => {
      this.detailedReport = data;
      console.log(this.detailedReport);
    });
  }
  logout() {
    this.router.navigate(['./login']);
  }
}
