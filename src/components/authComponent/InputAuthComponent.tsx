import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconProops {
  firstIcon:string,
  secondIcon?:string,
  size: number,
  color: string
}
interface InputProps{
  placeholder:string
  icon:IconProops
  showPassword?: () => void
  hidePassword?:boolean
  onChangeText?:(value:string)=>void
  value?:string
  onSubmitionEditing?:()=>void
}

const InputAuthComponent = ({placeholder,showPassword,hidePassword,icon:{color,firstIcon,size, secondIcon},onChangeText,value, onSubmitionEditing}:InputProps) => {
  return (

    <>
      {
        (!secondIcon)
        ?
        (
          <View className="w-11/12 my-2 flex-row items-center justify-center   rounded-lg p-2" >
              <View className="bg-white w-2/12 h-12 justify-center items-center rounded-l-xl">
                  <Icon name={firstIcon} size={size} color={color} />
              </View>
              <View className="w-9/12 border-l-2 border-slate-200">
                  <TextInput className="border-none rounded-r-xl bg-white pl-5 w-full" 
                    placeholder={placeholder}
                    onChangeText={ onChangeText}
                    value={value}
                    onSubmitEditing={onSubmitionEditing}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
              </View>
          </View>
        )
        :
        (
          <View className="w-11/12 my-2 flex-row items-center justify-center   rounded-lg p-2">
            <View className="bg-white w-2/12 h-12 justify-center items-center rounded-l-xl">
                <Icon name={firstIcon} size={size} color={color}/>
            </View>
            <View className="w-7/12 border-l-2 border-slate-200">
                <TextInput className="border-none  bg-white pl-5 w-full"
                  placeholder={placeholder}
                  secureTextEntry = {hidePassword}
                  onChangeText={ onChangeText}
                  value={value}
                  onSubmitEditing={onSubmitionEditing}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
            </View>
            <TouchableOpacity className="bg-white h-12 w-2/12 items-center justify-center rounded-r-xl" onPress={showPassword}>
                <Icon name={secondIcon} size={size}  />
            </TouchableOpacity>
          </View>
        )
      }
    </>
  );
};

export default InputAuthComponent;
