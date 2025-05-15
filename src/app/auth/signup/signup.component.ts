import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-signup',
  imports: [MATERIAL_MODULES, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signUpFrm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar:SnackbarService, private router:Router) {}

  ngOnInit(): void {
    this.initForm(); // Initialize the form on component load
    this.setData(); // Set form data (optional)
    setTimeout(() => {
      this.patchData(); // Patch form data after 2 seconds (optional)
    }, 2000)
  }

  //Initialize form
  initForm(){
    this.signUpFrm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })
  }

  // Form submit
  onSubmit() {
    if (this.signUpFrm.valid) {
      console.log(this.signUpFrm.value);
      this.snackBar.showSuccess('User registered successfully!');
      this.router.navigate(['/login']);
      // Perform signup logic here
    } else {
      console.log('Form is invalid');
    }
  }

  // Set form (fully update)
  setData(){
    this.signUpFrm.setValue({
      name: 'Ahetesham',
      phone: '9403381578',
      email: 'ahetesham.ma@gmail.com',
      password: '123456'
    })
  }

  // Patch form (partially update)
  patchData(){
    this.signUpFrm.patchValue({
      name: 'Ahetesham Shaikh'
    })
  }

  // Reset form
  resetForm() {
    this.signUpFrm.reset();
  }
}
