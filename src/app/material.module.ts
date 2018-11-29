import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressBarModule,
    MatTableModule, MatToolbarModule],
  exports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressBarModule,
    MatTableModule, MatToolbarModule],
})
export class MaterialModule { }
