import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.less'],
  imports: [CommonModule],
})
export class NavBarComponent {
  @Input() companyName!: string;
}
