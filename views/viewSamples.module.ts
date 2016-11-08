import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindFarmTopTenComponent } from './windFarmTopTen/windFarmTopTen.component';
import { WindFarmDetailsComponent } from './windFarmDetails/windFarmDetails.component';
import { WindFarmService, IWindFarm } from './windFarm.service';
import { TreemapComponent } from './treemap/treemap.component';
import { SunburstComponent } from './sunburst/sunburst.component';

@NgModule({
  declarations: [
    WindFarmTopTenComponent,
    WindFarmDetailsComponent,
    TreemapComponent,
    SunburstComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WindFarmService
  ],
})
export default class ViewSamplesModule {}