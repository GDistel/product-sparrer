import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {
  form: FormGroup;
  types = ['Bug', 'Process-related', 'UX issue']
  statuses = ['Ready', 'Draft']

  constructor(
    private dialogRef: MatDialogRef<EditTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.populateForm();
  }

  private populateForm(){
    let ticket = this.data.ticket;
    if (ticket){
      this.form = new FormGroup({
        type: new FormControl(ticket.type),
        status: new FormControl(ticket.status),
        subject: new FormControl(ticket.subject, Validators.maxLength(20)),
        body: new FormControl(ticket.body),
      })
    } else {
      this.form = new FormGroup({
        type: new FormControl(),
        status: new FormControl(),
        subject: new FormControl('', Validators.maxLength(20)),
        body: new FormControl(),
      })
    }
  }

  cancel(){
    this.dialogRef.close()
  }

}
