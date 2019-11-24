import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CheckEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data.email)
  }

  close(): void{
    this.dialogRef.close()
  }

}
