import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { StudentreportService} from '../services/studentreport.service';


@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.page.html',
  styleUrls: ['./student-report.page.scss'],
})
export class StudentReportPage implements OnInit {

  constructor(private router: Router, private studentReportService: StudentreportService) { }
  attendanceReport ;

  ngOnInit() {
    this.getReport();
  }

  backToDashboard() {
    this.router.navigate(['./attendance-scanner']);
  }

  getReport() {
    this.studentReportService.getReport().subscribe(data => {
      this.attendanceReport = data;
    });
  }
  logout() {
   this.router.navigate(['./login']);
  }
}
