import { Component } from '@angular/core';
import { HomeComponent } from './homePage/homePage.componnet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'trying';
}
