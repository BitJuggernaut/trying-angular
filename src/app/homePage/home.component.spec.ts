import { describe, it, expect, beforeEach } from 'vitest';
import { HomeComponent } from './homePage.componnet';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(() => {
    component = new HomeComponent();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct company name', () => {
    expect(component.companyName).toBe('TechNova Solutions');
  });

  it('should contain 3 services initially', () => {
    expect(component.services.length).toBe(3);
  });

  it('should add a service', () => {
    component.addService({
      title: 'DevOps',
      description: 'CI/CD pipelines',
    });

    expect(component.services.length).toBe(4);
  });

  it('should remove a service', () => {
    component.removeService('Consulting');

    expect(
      component.services.find((s) => s.title === 'Consulting'),
    ).toBeUndefined();
  });

  it('should return correct service count', () => {
    expect(component.getServiceCount()).toBe(3);
  });

  it('should toggle contact visibility', () => {
    expect(component.showContact).toBe(false);

    component.toggleContact();

    expect(component.showContact).toBe(true);
  });
});
