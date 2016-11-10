import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindFarmService, IWindFarm } from './windFarm.service';
import { StateTaxesService } from './stateTaxes/stateTaxes.service';

import { WindFarmTopTenComponent } from './windFarmTopTen/windFarmTopTen.component';
import { WindFarmDetailsComponent } from './windFarmDetails/windFarmDetails.component';
import { TreemapComponent } from './treemap/treemap.component';
import { SunburstComponent } from './sunburst/sunburst.component';
import { StateTaxesComponent } from './stateTaxes/stateTaxes.component';

@NgModule({
  declarations: [
    WindFarmTopTenComponent,
    WindFarmDetailsComponent,
    TreemapComponent,
    SunburstComponent,
    StateTaxesComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WindFarmService,
    StateTaxesService
  ],
})
export default class ViewSamplesModule {}