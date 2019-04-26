import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-professor-homepage',
  templateUrl: './professor-homepage.page.html',
  styleUrls: ['./professor-homepage.page.scss'],
})
export class ProfessorHomepagePage implements OnInit {
  courses: {};
  constructor( private router: Router) {
    // Course data
    this.courses = [ {
      stream : 'Computer Science',
      coursecode: '5525 0001 Cloud Computing',
      semesteryear: '2019 Spring Semester',
      attendance: 'N/A'
    }
    ];
  }

  ngOnInit() {
  }
  getReport() {
    this.router.navigate(['./professor-report']);
  }

  takeAttendance() {
    this.router.navigate(['./start-attendance']);
  }
  logout() {
    this.router.navigate(['./login']);
  }
}
