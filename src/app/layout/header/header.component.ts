import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MATERIAL_MODULES, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  userName: string | null = null;
  constructor() {
     this.userName = localStorage.getItem('user');
  }
}
