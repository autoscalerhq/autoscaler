import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });


  it('false to be false', () => {
    expect(false).toBe(false);
  });

});

import { render, screen } from '@testing-library/react';
import {Home} from './Home';

describe('App', () => {
  it('renders headline', () => {
    render(<Home />);

    screen.debug();

    // check if App components renders headline
  });
});