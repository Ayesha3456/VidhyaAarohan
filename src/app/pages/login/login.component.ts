import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password = '';
  showPassword = false;
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit(): void {
    if (!this.password.trim()) {
      this.error = 'Please enter your password.';
      return;
    }
    this.loading = true;
    this.error = '';

    setTimeout(() => {
      const ok = this.auth.login(this.password);
      if (ok) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Incorrect password. Please try again.';
        this.password = '';
      }
      this.loading = false;
    }, 600);
  }
}
