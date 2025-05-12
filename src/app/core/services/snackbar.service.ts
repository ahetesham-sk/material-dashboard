import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

 constructor(private snackBar: MatSnackBar) {}

 showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'top', // 'top' | 'bottom'
      // panelClass: ['toast-success'],
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'top', // 'top' | 'bottom'
      // panelClass: ['toast-error'],
    });
  }
}
