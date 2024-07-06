import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


// otp module
import { NgOtpInputModule } from 'ng-otp-input';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    EmailVerificationComponent,
    PasswordChangeComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
