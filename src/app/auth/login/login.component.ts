import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // set the currenr year
  submitted = false;
  year: number = new Date().getFullYear();
  fieldTextType!: boolean;
  constructor() {
  }

  ngOnInit(): void {

  }
  /**
* Password Hide/Show
*/
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
