import * as React from 'react';
import { View } from 'react-native';

/* eslint-disable-next-line */
interface Props extends React.ComponentProps<typeof View> {}

export function Container(props: Props) {
  return <View {...props} />;
}
