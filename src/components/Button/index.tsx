import React from 'react';
import { Text } from 'react-native';

import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import tw from '../../../lib/tailwind.js';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <RectButton
    {...rest}
    style={tw`h-10 bg-primary200 rounded-200 mt-200 justify-center items-center max-w-xs`}
  >
    <Text style={tw`font-secondary text-font300 text-gray100`}>{children}</Text>
  </RectButton>
);

export default Button;
