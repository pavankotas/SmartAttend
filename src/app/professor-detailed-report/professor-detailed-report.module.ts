import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessorDetailedReportPage } from './professor-detailed-report.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorDetailedReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessorDetailedReportPage]
})
export class ProfessorDetailedReportPageModule {}
