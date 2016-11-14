import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShellModule } from 'plotter-shell-angular2/dist/index';

import { WindFarmService, IWindFarm } from './windFarm.service';
import { StateTaxesService } from './stateTaxes/stateTaxes.service';

import { WindFarmTopTenComponent } from './windFarmTopTen/windFarmTopTen.component';
import { WindFarmDetailsComponent } from './windFarmDetails/windFarmDetails.component';
import { TreemapComponent } from './treemap/treemap.component';
import { SunburstComponent } from './sunburst/sunburst.component';
import { StateTaxesComponent } from './stateTaxes/stateTaxes.component';
import { TabLayoutTestComponent } from './tabLayoutTest/tabLayoutTest.component';
import { PageLayoutTestComponent } from './pageLayoutTest/pageLayoutTest.component';

@NgModule({
  declarations: [
    WindFarmTopTenComponent,
    WindFarmDetailsComponent,
    TreemapComponent,
    SunburstComponent,
    StateTaxesComponent,
    TabLayoutTestComponent,
    PageLayoutTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ShellModule
  ],
  providers: [
    WindFarmService,
    StateTaxesService
  ],
})
export default class ViewSamplesModule {}