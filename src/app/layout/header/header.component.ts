import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MATERIAL_MODULES } from '../../shared/material/material';

@Component({
  selector: 'app-header',
  imports: [MATERIAL_MODULES],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  userName = 'Ahetesham Shaikh';
}
