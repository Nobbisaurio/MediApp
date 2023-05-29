import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps{
    textStyle:string,
    touchableStyle:string
    buttonName:string
    navigation?:()=>void
}

const ButtonAuthComponent = ({textStyle,touchableStyle,buttonName,navigation}:ButtonProps) => {
  return (
    <TouchableOpacity className={`${touchableStyle}`} onPress={navigation}>
        <Text className={`${textStyle}`}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAuthComponent;
