import { Component } from '@angular/core';
import { MENUAdmin, MENUCustomer } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.scss']
})
export class ManageAccessComponent {
  MENU = MENUAdmin
  MENU1 = MENUCustomer
}
