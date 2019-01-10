import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { DonationTableComponent } from './components/donation-table/donation-table.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FundraisingProgressComponent } from './components/fundraising-progress/fundraising-progress.component';
import { FundraisingPageComponent } from './components/fundraising-page/fundraising-page.component';
import { SendEmailComponent } from './components/send-email/send-email.component';

@NgModule({
  declarations: [AppComponent, NavComponent, DonationTableComponent, DashboardComponent, FundraisingProgressComponent, FundraisingPageComponent, SendEmailComponent],
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
