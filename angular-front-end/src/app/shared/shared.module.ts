import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SnackBarService } from './snack-bar.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    TopNavComponent
  ],
  declarations: [
    ConfirmationPromptComponent,
    TopNavComponent,
  ],
  entryComponents: [
    ConfirmationPromptComponent,
  ],
  providers: [
    SnackBarService
  ]
})
export class SharedModule { }
