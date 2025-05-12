import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  showSuccess(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title,
      text,
      confirmButtonColor: '#4caf50' // green
    });
  }

  showError(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title,
      text,
      confirmButtonColor: '#f44336' // red
    });
  }

  showInfo(title: string, text: string) {
    Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonColor: '#2196f3' // blue
    });
  }

  showWarning(title: string, text: string) {
    Swal.fire({
      icon: 'warning',
      title,
      text,
      confirmButtonColor: '#ff9800' // orange
    });
  }

  confirm(options: {
    title?: string;
    text?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    icon?: SweetAlertIcon;
  }): Promise<boolean> {
    return Swal.fire({
      title: options.title || 'Are you sure?',
      text: options.text || 'This action cannot be undone.',
      icon: options.icon || 'warning',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Yes',
      cancelButtonText: options.cancelButtonText || 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then(result => result.isConfirmed);
  }
}
