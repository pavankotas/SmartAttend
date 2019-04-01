import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-professor-homepage',
  templateUrl: './professor-homepage.page.html',
  styleUrls: ['./professor-homepage.page.scss'],
})
export class ProfessorHomepagePage implements OnInit {

  constructor( private router: Router) { }

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
