import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { LoadingService } from '../../../core/services/loading.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { MATERIAL_MODULES } from '../../../shared/material/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [MATERIAL_MODULES, CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loadingService: LoadingService,
    private snackbar:SnackbarService
  ) {}

  ngOnInit(){
    this.initForm();
    this.route.params.subscribe(params =>{
      this.userId = +params['id'];
      if (this.userId) {
        this.isEditMode = true;
        this.userService.getUserById(this.userId).subscribe(user => {
          this.userForm.patchValue(user);
          this.userForm.get('phone')?.patchValue('9403381578');
        });
      }
    })
  }

  //init form
  initForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      website: ['', [Validators.required]],
      company: this.fb.group({
        name: ['', [Validators.required]],
        catchPhrase: ['', [Validators.required]],
        bs: ['', [Validators.required]]
      }),
      address: this.fb.group({
        street: ['', [Validators.required]],
        suite: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        geo: this.fb.group({
          lat: ['', [Validators.required]],
          lng: ['', [Validators.required]]
        })
      })
    });
  }

  onSubmit(): void {
    const formValue = this.userForm.value;
    this.loadingService.show();
    if (this.isEditMode) {
      this.userService.updateUser(this.userId, formValue).subscribe(() => {
        this.loadingService.hide();
        this.snackbar.showSuccess('User updated successfully');
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(formValue).subscribe(() => {
        this.loadingService.hide();
        this.snackbar.showSuccess('User added successfully');
        this.router.navigate(['/users']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/users']);
  }
}
