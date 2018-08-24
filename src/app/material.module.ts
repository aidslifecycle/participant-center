// tslint:disable-next-line:no-submodule-imports
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatIconModule,
	MatListModule,
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule
	],
	exports: [
		LayoutModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule
	]
})
export class MaterialModule {}
