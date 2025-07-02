import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '../components/pages/Home';

expect.extend(toHaveNoViolations);

test('should not have any accessibility violations', async () => {
  const { container } = render(<Home />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});