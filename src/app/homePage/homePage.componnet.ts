import { Component } from '@angular/core';
import { Service } from './homePage.componet.models';
import { NavBarComponent } from './navBar/navBar.componnet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.less'],
  imports: [NavBarComponent, CommonModule],
})
export class HomeComponent {
  companyName = 'TechNova Solutions';

  services: Service[] = [
    {
      title: 'Web Development',
      description: 'Building scalable and modern web applications.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploying secure cloud infrastructure.',
    },
    {
      title: 'Consulting',
      description: 'Helping companies improve their technology stack.',
    },
  ];

  email = 'contact@technova.com';

  showContact = false;

  toggleContact() {
    this.showContact = !this.showContact;
  }

  addService(service: Service) {
    this.services.push(service);
  }

  removeService(title: string) {
    this.services = this.services.filter((s) => s.title !== title);
  }

  getServiceCount() {
    return this.services.length;
  }
}
