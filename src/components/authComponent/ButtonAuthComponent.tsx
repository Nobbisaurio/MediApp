import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps{
    textStyle:string,
    touchableStyle:string
    buttonName:string
}

const ButtonAuthComponent = ({textStyle,touchableStyle,buttonName}:ButtonProps) => {
  return (
    <TouchableOpacity className={`${touchableStyle}`}>
        <Text className={`${textStyle}`}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAuthComponent;
