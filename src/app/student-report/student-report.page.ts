import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.page.html',
  styleUrls: ['./student-report.page.scss'],
})
export class StudentReportPage implements OnInit {

  constructor(private router: Router) { }
  backToDashboard(){
    this.router.navigate(['./dashboard']);
  }
  ngOnInit() {
  }

}
