import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-report',
  templateUrl: './professor-report.page.html',
  styleUrls: ['./professor-report.page.scss'],
})
export class ProfessorReportPage implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
