import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts/charts.component';
import { DonationTableComponent } from './donation-table/donation-table.component';

@NgModule({
	imports: [CommonModule],
	declarations: [ChartsComponent, DonationTableComponent]
})
export class DashboardModule {}
