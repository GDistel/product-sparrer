import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CheckEmailComponent>,
  ) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close()
  }

}
