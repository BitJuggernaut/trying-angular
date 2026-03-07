import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.less'],
})
export class NavBarComponent {
  @Input() companyName!: string;
}
