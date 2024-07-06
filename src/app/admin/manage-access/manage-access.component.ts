import { Component } from '@angular/core';
import { MENU, MENU1 } from 'src/app/layouts/sidebar/menu';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.scss']
})
export class ManageAccessComponent {
  MENU = MENU
  MENU1 = MENU1
}
