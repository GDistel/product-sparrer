import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-deploy-tickets',
  templateUrl: './deploy-tickets.component.html',
  styleUrls: ['./deploy-tickets.component.scss']
})
export class DeployTicketsComponent implements OnInit {
  form: FormGroup;
  emails: string[];

  constructor(
    private dialogRef: MatDialogRef<DeployTicketsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.data.emails?
      this.emails = this.data.emails:
      this.emails = [];
    if (this.emails){
      this.form = new FormGroup({
        destinatary: new FormControl(this.emails[0]),
      })
    }
  }

  cancel(){
    this.dialogRef.close()
  }

}
