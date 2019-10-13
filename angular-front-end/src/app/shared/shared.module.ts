import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';
import { TopNavComponent } from './top-nav/top-nav.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
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
  ]
})
export class SharedModule { }
