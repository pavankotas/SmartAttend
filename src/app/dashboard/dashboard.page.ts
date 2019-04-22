import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private router: Router) { }
  courses = [ {
    stream : 'Computer Science',
    coursecode: '5525 0001 Cloud Computing',
    semesteryear: '2019 Spring Semester',
    attendance: '97%'
  }, {
      stream : 'Computer Science',
      coursecode: '5540 0001 Principles Of Big Data Management',
      semesteryear: '2019 Spring Semester',
      attendance: '99%'
    }
  ];
  logout() {
    this.router.navigate(['./login']);
  }
  ngOnInit() {
  }

}
