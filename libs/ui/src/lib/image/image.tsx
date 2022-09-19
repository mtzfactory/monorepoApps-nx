import * as React from 'react';
import { Image as RNImage } from 'react-native';

/* eslint-disable-next-line */
interface Props extends React.ComponentPropsWithoutRef<typeof RNImage> {}

export function Image(props: Props) {
  return <RNImage {...props} />;
}
