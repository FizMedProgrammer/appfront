import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataImportComponent }   from './data-import/data-import.component';
import { BasicComponent } from './basic/basic.component';
import { DataManipulationComponent } from './data-manipulation/data-manipulation.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { StatisticAnalysisComponent } from './statistic-analysis/statistic-analysis.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PublicationsComponent } from './publications/publications.component';




const routes: Routes = [
{ path: '', redirectTo: '/basic', pathMatch: 'full' },
{ path: 'basic', component: BasicComponent },
{ path: 'user-profile', component: UserProfileComponent },
{ path: 'data-import', component: DataImportComponent },
{ path: 'data-manipulation', component: DataManipulationComponent },
{ path: 'data-visualization', component: DataVisualizationComponent },
{ path: 'statistic-analysis', component: StatisticAnalysisComponent },
{ path: 'publications', component: PublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
