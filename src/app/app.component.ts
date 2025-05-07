import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material/material';
import { LoadingService } from './core/services/loading.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MATERIAL_MODULES, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-dashboard';
  constructor(public loadingService: LoadingService) {}

}
