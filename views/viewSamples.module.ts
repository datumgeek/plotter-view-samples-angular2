import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WindFarmTopTenComponent } from './windFarmTopTen/windFarmTopTen.component';

@NgModule({
  declarations: [
    WindFarmTopTenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
})
export default class ViewSamplesModule {}