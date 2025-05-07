import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [MATERIAL_MODULES, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpFrm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpFrm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    })
  }

  onSubmit(){
    if (this.signUpFrm.valid) {
      console.log(this.signUpFrm.value);
      // Perform signup logic here
    } else {
      console.log('Form is invalid');
    }
  }

}
