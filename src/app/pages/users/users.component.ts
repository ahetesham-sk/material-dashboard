import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '../../../app/core/services/loading.service';
import { MATERIAL_MODULES } from '../../../app/shared/material/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [MATERIAL_MODULES, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {
 constructor(public loadingService: LoadingService) {}

 showLoader() {
    this.loadingService.show();
 }

 hideLoader() {
    this.loadingService.hide();
 }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.hideLoader();
  }
}
