import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
        [
          {
            path: 'dashboard',
            children:
                [
                  {
                    path: '',
                    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
                  }
                ]
          },
          {
            path: '',
            redirectTo: 'tabs',
            pathMatch: 'full'
          }
        ]
  }
];

@NgModule({
  imports:
      [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule
      ],
  declarations:
      [
        TabsPage
      ]
})
export class TabsPageModule {}
