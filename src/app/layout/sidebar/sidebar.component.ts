import { Component, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material';
import {MatListModule} from '@angular/material/list';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-sidebar',
  imports: [MATERIAL_MODULES, RouterLink,CommonModule, RouterLinkActive, NgScrollbarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  router = inject(Router);

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
