import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: UntypedFormGroup;
  submitted = false;
  year: number = new Date().getFullYear();
  fieldTextType!: boolean;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  email = '';
  password = '';
  role: any = '';
  onSubmit() {
    this.submitted = true;
    // Login Api
    this.email = this.f['email'].value;
    this.password = this.f['password'].value;
    this.role = this.email.split('@');
    this.role = this.role[0];
    console.log('role', this.role)
    if(this.role == 'admin'){
      this.router.navigate(['/dashboard']);
      localStorage.setItem('currentUserEmail', this.email);
      localStorage.setItem('currentUserRole', this.role);
    }
    if(this.role == 'customer'){
      this.router.navigate(['/customer-dashboard']);
      localStorage.setItem('currentUserEmail', this.email);
      localStorage.setItem('currentUserRole', this.role);
    }
    // this.router.navigate(['/dashboard']);
    console.log("email :", this.email)
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
