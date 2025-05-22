import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (user === 'Ahetesham') {
    // User is authenticated
    return true;
  } else {
    // User is not authenticated, redirect to login
    router.navigate(['/login']);
    return false;
  }
};
