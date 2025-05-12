import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MATERIAL_MODULES } from '../../../shared/material/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/models/user.model';
import { LoadingService } from '../../../core/services/loading.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserViewComponent } from '../user-view/user-view.component';
import Swal from 'sweetalert2';
import { SweetAlertService } from '../../../core/services/sweet-alert.service';

@Component({
  selector: 'app-user-list',
  imports: [MATERIAL_MODULES, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = []; // strongly typed user list
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'website', 'company', 'action'];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public loadingService: LoadingService, private snackbar: SnackbarService,
    private userService: UserService, private router: Router, private dialog: MatDialog,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  // Fetch users from the service
  getUsers() {
    this.loadingService.show();
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.dataSource.data = this.users;
        this.loadingService.hide();
      },
      error: (err) => {
        this.snackbar.showError('Error fetching users');
        this.loadingService.hide();
      }
    });
  }

  // View user details
  onView(user: User) {
    // open modal or navigate
    this.dialog.open(UserViewComponent, {
      width: '800px',
      data: user
    });
  }

  // Edit user
  onEdit(user: User) {
    // navigate to edit form
    console.log('Edit user:', user);
    this.router.navigate(['/users/edit', user.id]);
  }

  // Delete user
  onDelete(user: User) {
    this.sweetAlert.confirm({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      icon: 'warning'
    }).then(confirmed => {
      if (confirmed) {
        this.userService.deleteUser(user.id).subscribe({
          next: () => {
            this.sweetAlert.showSuccess('Deleted!', 'User has been deleted.');
            this.getUsers();
          },
          error: (err) => {
            this.sweetAlert.showError(
              'Oops...',
              'Something went wrong while deleting the user!\n' + (err?.message || '')
            );
          }
        });
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
