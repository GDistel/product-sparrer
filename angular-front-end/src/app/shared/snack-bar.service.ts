import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(targetSnackbar: TemplateRef<any>, delay: number): void {
    this.snackBar.openFromTemplate(targetSnackbar, {
      duration: delay,
    });
  }

}
