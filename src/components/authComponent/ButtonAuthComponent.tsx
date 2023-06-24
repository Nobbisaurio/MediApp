import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps{
    textStyle:string,
    touchableStyle:string
    buttonName:string
    navigation?:()=>void
    onPress:()=>void
}

const ButtonAuthComponent = ({textStyle,touchableStyle,buttonName,navigation,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity className={`${touchableStyle}`} onPress={onPress}>
        <Text className={`${textStyle}`}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAuthComponent;
