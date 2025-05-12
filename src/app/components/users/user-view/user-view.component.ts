import { Component, Inject } from '@angular/core';
import { MATERIAL_MODULES } from '../../../shared/material/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-view',
  imports: [MATERIAL_MODULES],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
