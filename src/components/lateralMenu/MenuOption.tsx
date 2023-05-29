import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuOptionProps{
    iconName:string
    iconSize:number
    iconColor:string
    iconoContentStyle:string
    componentStyle:string
    optionName:string
    optionNameStyle:string
    optionContentStyle:string
    navigation :()=>void
}


const MenuOption = ({componentStyle,iconName,iconoContentStyle,optionName,optionContentStyle,optionNameStyle,iconColor,iconSize,navigation}:MenuOptionProps) => {
  return (
    <TouchableOpacity className={componentStyle} onPress={navigation}>
        <View className={iconoContentStyle}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
        </View>
        <View className={optionContentStyle}>
            <Text className={optionNameStyle}>{optionName}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default MenuOption;
