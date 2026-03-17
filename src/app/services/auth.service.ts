import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // ── Change this password to your own ──────────────────────────────────
  private readonly TEACHER_PASSWORD = 'AMR@2025';
  // ──────────────────────────────────────────────────────────────────────

  private readonly SESSION_KEY = 'amr_teacher_auth';

  constructor(private router: Router) {}

  login(password: string): boolean {
    if (password === this.TEACHER_PASSWORD) {
      sessionStorage.setItem(this.SESSION_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.SESSION_KEY) === 'true';
  }
}
