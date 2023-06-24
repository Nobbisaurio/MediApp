import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


interface ModallateralMenuProps {
  iconName?: string,
  buttonText:string,
  action?:()=>void
}
const ModallateralMenu = ({iconName,buttonText,action}:ModallateralMenuProps) => {
  return (
    <>
    {
     (iconName) ? 
     (
      <View>
        <TouchableOpacity className='w-full flex-row items-center' onPress={action}>
          <View className=' rounded-full bg-slate-500 p-2 m-3'>
            <Icon name={iconName!} color={'white'} size={20} />
          </View>
          <View>
            <Text className='text-white font-bold text-xl'>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ) :
    (
      <View  className='flex-1 '>
        <View className=' absolute bottom-0 w-full items-center mb-8 '> 
          <TouchableOpacity onPress={action}>
            <Text className='text-red-500 font-bold text-xl'>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>

    ) 
    }
    
    </>
  )
}

export default ModallateralMenu