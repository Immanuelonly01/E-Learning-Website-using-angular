import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Login Form Setup
    this.loginForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Signup Form Setup
    this.signupForm = this.fb.group({
      signupName: ['', [Validators.required, Validators.minLength(3)]],
      signupEmail: ['', [Validators.required, Validators.email]],
      signupPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Successful:', this.loginForm.value);
      alert('Login Successful');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSignupSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Signup Successful:', this.signupForm.value);
      alert('Signup Successful');
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
