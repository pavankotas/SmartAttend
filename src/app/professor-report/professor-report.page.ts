import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-professor-report',
  templateUrl: './professor-report.page.html',
  styleUrls: ['./professor-report.page.scss'],
})
export class ProfessorReportPage implements OnInit {

  constructor( private router: Router) { }

    attendanceReport = [
    {
      date: '03-20-2019',
      totalStudents: '20',
      attendedStudents: '19'
    },
    {
      date: '03-21-2019',
      totalStudents: '20',
      attendedStudents: '15'
    },
    {
      date: '03-22-2019',
      totalStudents: '20',
      attendedStudents: '15'
    }
  ];

  ngOnInit() {
  }

  backToProfessorHomePage() {
    this.router.navigate(['./professor-homepage']);
  }
  logout() {
    this.router.navigate(['./login']);
  }
}
