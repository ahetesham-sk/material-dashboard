import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from '../../../app/core/services/loading.service';
import { MATERIAL_MODULES } from '../../../app/shared/material/material';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../core/services/snackbar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { UserListComponent } from "../../components/users/user-list/user-list.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MATERIAL_MODULES, CommonModule, UserListComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  {
  constructor(){}

}
