import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-prompt',
  templateUrl: './confirmation-prompt.component.html',
  styleUrls: ['./confirmation-prompt.component.scss']
})
export class ConfirmationPromptComponent implements OnInit {
  action: string;
  item: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmationPromptComponent>,
  ) { }

  ngOnInit() {
    this.action = this.data.action;
    this.item = this.data.item;
  }

  cancel(){
    this.dialogRef.close()
  }

}
