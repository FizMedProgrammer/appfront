import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DataImportComponent } from './data-import/data-import.component';

import { BasicComponent } from './basic/basic.component';
import { DataManipulationComponent } from './data-manipulation/data-manipulation.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component';
import { StatisticAnalysisComponent } from './statistic-analysis/statistic-analysis.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ExporterComponent } from './exporter/exporter.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { GroupCreatorComponent } from './group-creator/group-creator.component';
import { CategoryCreatorComponent } from './category-creator/category-creator.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PublicationsComponent } from './publications/publications.component';
import { BasicVisualizationComponent } from './basic-visualization/basic-visualization.component';
import { ChartCreatorComponent } from './chart-creator/chart-creator.component';
import { TableWithDataComponent } from './table-with-data/table-with-data.component';
import { CollapseMenuCategoryComponent } from './collapse-menu-category/collapse-menu-category.component';
import { CollapseMenuGroupComponent } from './collapse-menu-group/collapse-menu-group.component';
import { CollapseMenuFileComponent } from './collapse-menu-file/collapse-menu-file.component';
import { ChartComponent } from './chart/chart.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    DataImportComponent,
    BasicComponent,
    DataManipulationComponent,
    DataVisualizationComponent,
    StatisticAnalysisComponent,
    UploaderComponent,
    ExporterComponent,
    DownloaderComponent,
    GroupCreatorComponent,
    CategoryCreatorComponent,
    UserProfileComponent,
    PublicationsComponent,
    BasicVisualizationComponent,
    ChartCreatorComponent,
    TableWithDataComponent,
    CollapseMenuCategoryComponent,
    CollapseMenuGroupComponent,
    CollapseMenuFileComponent,
    ChartComponent,
    DescriptionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
