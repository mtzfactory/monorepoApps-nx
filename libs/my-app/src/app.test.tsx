import * as React from 'react';
import { render, screen } from '@testing-library/react-native';

import { App } from './app';

test('renders correctly', () => {
  const expectedText = 'Lorem ipsum';

  render(<App />);

  const text = screen.getByText(expectedText);

  expect(text).toHaveTextContent(expectedText);

  expect(screen.toJSON()).toMatchSnapshot();
});
