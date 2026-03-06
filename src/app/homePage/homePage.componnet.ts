import { Component } from '@angular/core';
import { Service } from './homePage.componnet.models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.less']
})
export class HomeComponent {

   companyName = 'TechNova Solutions';

  services: Service[] = [
    {
      title: 'Web Development',
      description: 'Building scalable and modern web applications.'
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploying secure cloud infrastructure.'
    },
    {
      title: 'Consulting',
      description: 'Helping companies improve their technology stack.'
    }
  ];

  email = 'contact@technova.com';
}