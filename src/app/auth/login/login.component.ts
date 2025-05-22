import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../../core/services/loading.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MATERIAL_MODULES, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading = false;
  loginFrm!: FormGroup;
  hide = true;

  constructor(private router:Router, private fb: FormBuilder){
    this.loginFrm = this.fb.group({
      email: ['ahetesham@gmail.com', [Validators.email, Validators.required ]],
      password: ['abc@123', [Validators.required, Validators.min(3) ]],
      isRemember: [false]
    });
  }

  get emailInput() { return this.loginFrm.get('email'); }
  get passwordInput() { return this.loginFrm.get('password'); }

  onLogin() {
    this.isLoading = true;
    console.log(this.loginFrm.value);
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      localStorage.setItem('user', 'Ahetesham');
      this.router.navigate(['/dashboard']);
    }, 2000); // fake 2 seconds loading
  }
}
