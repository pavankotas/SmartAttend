import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { StartAttendancePage } from './start-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: StartAttendancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, QRCodeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StartAttendancePage]
})
export class StartAttendancePageModule {}
