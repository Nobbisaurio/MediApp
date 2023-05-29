import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface LogoutProps{
    touchableStyle:string
    containerStyle:string
    iconName:string
    iconSize:number
    iconColor:string
    textStyle:string
}

const Logout = ({touchableStyle,containerStyle,iconName,iconSize,iconColor,textStyle}:LogoutProps) => {
  return (
    <TouchableOpacity className={touchableStyle}>
        <View className={containerStyle}>
          <View >
            <Text className={textStyle}> Cerrar Sesion </Text>
          </View>
          <View>
            <Icon name={iconName} size={iconSize} color={iconColor}/>
          </View>
        </View>
      </TouchableOpacity>
  );
};

export default Logout;
