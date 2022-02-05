import React from 'react';
import { Text, View } from 'react-native';

import tw from 'twrnc';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <View>
      <Text style={tw`pt-6`}>SignIn Page</Text>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="E-mail"
        returnKeyType="next"
      />
      <Button>Texto</Button>
    </View>
  );
};

export default SignIn;
