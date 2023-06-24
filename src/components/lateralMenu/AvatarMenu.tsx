import React from 'react';
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'


interface AvatarMenuProps {
    urlImage: any,
    imageStyle: string
    imageContentStyle?:string
    textContentStyle?:string
    textStyle: string
    componentStyle?: string
    userName: string
    changeAvatar: ()=>void
}

const AvatarMenu = ({changeAvatar,urlImage, imageStyle, userName,componentStyle,textStyle,imageContentStyle,textContentStyle}:AvatarMenuProps) => {


  return (
    <View className={componentStyle}>
        <View className={imageContentStyle}>
            <Image
            className = {imageStyle}
            source={{uri: `${urlImage}`}}
            />
        <View className='absolute right-0 bottom-0  bg-slate-500 border-2 border-slate-600 rounded-full w-[30px] h-[30px] items-center'>
          <TouchableOpacity className='w-full rounded-full' onPress={changeAvatar}>
            <Icon name='camera-outline' size={25}  color={'white'} />
          </TouchableOpacity>
        </View>
        </View>
        <View className={textContentStyle}>
            <Text className={textStyle}>{userName}</Text>
        </View>

    </View>
  );
};

export default AvatarMenu;
