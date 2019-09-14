import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConfirmationPromptComponent } from './confirmation-prompt/confirmation-prompt.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
  ],
  declarations: [
    ConfirmationPromptComponent
  ],
  entryComponents: [
    ConfirmationPromptComponent
  ]
})
export class SharedModule { }
