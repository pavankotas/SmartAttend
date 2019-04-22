import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'attendance-scanner', loadChildren: './attendance-scanner/attendance-scanner.module#AttendanceScannerPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'start-attendance', loadChildren: './start-attendance/start-attendance.module#StartAttendancePageModule' },
  { path: 'professor-homepage', loadChildren: './professor-homepage/professor-homepage.module#ProfessorHomepagePageModule' },
  { path: 'professor-report', loadChildren: './professor-report/professor-report.module#ProfessorReportPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },  { path: 'student-report', loadChildren: './student-report/student-report.module#StudentReportPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
