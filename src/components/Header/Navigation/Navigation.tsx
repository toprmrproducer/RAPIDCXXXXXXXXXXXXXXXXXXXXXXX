import React from 'react';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      <NavDropdown
        label="Teams"
        items={[
          { label: 'Team Alpha', to: '/teams/alpha' },
          { label: 'Team Bravo', to: '/teams/bravo' },
          { label: 'Team Delta', to: '/teams/delta' },
          { label: 'Team Papa Bear', to: '/teams/papa' },
        ]}
      />
      <NavDropdown
        label="Solutions"
        items={[
          { label: 'Voice Solutions', to: '/solutions/voice' },
          { label: 'Marketing Automation', to: '/solutions/marketing' },
          { label: 'Customer Support', to: '/solutions/support' },
          { label: 'Custom Software', to: '/solutions/software' },
        ]}
      />
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}