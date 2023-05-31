import React from 'react';
import { Image, View, Text } from 'react-native';


interface AvatarMenuProps {
    urlImage: string,
    imageStyle: string
    imageContentStyle?:string
    textContentStyle?:string
    textStyle: string
    componentStyle?: string
    userName: string
}

const AvatarMenu = ({urlImage, imageStyle, userName,componentStyle,textStyle,imageContentStyle,textContentStyle}:AvatarMenuProps) => {
  return (
    <View className={componentStyle}>
        <View className={imageContentStyle}>
            <Image
            className = {imageStyle}
            source={{uri: `${urlImage}`}}
            />
        </View>
        <View className={textContentStyle}>
            <Text className={textStyle}>{userName}</Text>
        </View>

    </View>
  );
};

export default AvatarMenu;
