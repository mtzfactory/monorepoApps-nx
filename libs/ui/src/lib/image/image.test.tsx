import * as React from 'react';
import { render } from '@testing-library/react-native';

import { Image } from './image';

const imageUrl = 'https://placekitten.com/g/300/300';

describe('Image', () => {
  it('should render successfully', () => {
    const { container } = render(<Image source={{ uri: imageUrl }} />);
    expect(container).toBeTruthy();
  });
});
