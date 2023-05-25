import React from 'react';
import { View, Image, Text } from 'react-native';

interface LogoProps {
    urlImage:string
    institutionName: string
}

const LogoAuthComponent = ({urlImage,institutionName}:LogoProps) => {
  return (
    <View className="items-center">
        <Image
            source={{uri:`${urlImage}`}}
            className="w-24 h-24 "
        />
        <Text className="text-3xl mt-8">{institutionName}</Text>
    </View>
  );
};

export default LogoAuthComponent;
