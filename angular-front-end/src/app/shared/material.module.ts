import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
