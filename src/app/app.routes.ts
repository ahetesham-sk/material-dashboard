import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard', canActivate: [authGuard] },
      { path: 'users', component: UsersComponent, title: 'Users' },
      { path: 'users/add', component: UserFormComponent },
      { path: 'users/edit/:id', component: UserFormComponent },
      { path: 'profile', component: ProfileComponent, title: 'Profile' },
      // Add more routes here as needed
    ]
  }
];
