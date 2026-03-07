import { describe, it, expect, beforeEach } from 'vitest';
import { NavBarComponent } from './navBar.componnet';

describe('NavBarComponent', () => {
  let component: NavBarComponent;

  beforeEach(() => {
    component = new NavBarComponent();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct company name', () => {
    expect(component.companyName).toBe('TechNova Solutions');
  });
});
