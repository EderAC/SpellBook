import React, { useState, useCallback, useRef, forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import tw from '../../../lib/tailwind.js';

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, TextInputProps> = (
  { ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View
      style={
        isFocused
          ? tw`h-700 bg-dark100 rounded-200 mt-200 justify-center items-center max-w-xs px-400 border2 border-primary500`
          : tw`h-700 bg-dark100 rounded-200 mt-200 justify-center items-center max-w-xs px-400`
      }
    >
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#fff"
        defaultValue=""
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        style={tw`font-secondary text-font300 text-gray200 w-full`}
      />
    </View>
  );
};
export default forwardRef(Input);
