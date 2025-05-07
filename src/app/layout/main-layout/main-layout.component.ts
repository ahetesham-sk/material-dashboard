import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [MATERIAL_MODULES, HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  showFiller = false;
}
