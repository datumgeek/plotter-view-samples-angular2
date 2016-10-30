import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindFarmTopTenComponent } from './windFarmTopTen/windFarmTopTen.component';
import { TreemapComponent } from './treemap/treemap.component';

@NgModule({
  declarations: [
    WindFarmTopTenComponent,
    TreemapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export default class ViewSamplesModule {}