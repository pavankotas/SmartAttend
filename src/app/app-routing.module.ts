import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'attendance-scanner', loadChildren: './attendance-scanner/attendance-scanner.module#AttendanceScannerPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'professor-homepage', loadChildren: './professor-homepage/professor-homepage.module#ProfessorHomepagePageModule' },
  { path: 'professor-report', loadChildren: './professor-report/professor-report.module#ProfessorReportPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
