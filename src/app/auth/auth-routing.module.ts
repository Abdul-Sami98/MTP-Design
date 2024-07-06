import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotpasswordComponent,
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
      },
      {
        path: 'change-password',
        component: PasswordChangeComponent,
      },
      {
        path: 'success',
        component: SuccessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
