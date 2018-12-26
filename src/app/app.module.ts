import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { DonationTableComponent } from './components/donation-table/donation-table.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent, DonationTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ServicesModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
