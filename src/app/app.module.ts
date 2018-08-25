import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:no-submodule-imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
