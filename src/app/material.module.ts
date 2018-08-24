// tslint:disable-next-line:no-submodule-imports
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatIconModule,
	MatListModule,
	MatSidenavModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	exports: [
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	]
})
export class MaterialModule {}
