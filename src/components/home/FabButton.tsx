import React from 'react'
import {Text,TouchableOpacity} from 'react-native'

interface FabProps  {
    onPress: ()=>void
}


const FabButton = ({onPress}:FabProps) => {



  return (
    <TouchableOpacity className='bg-slate-500 rounded-full w-16 h-16 justify-center items-center absolute bottom-5 right-1 ' onPress={onPress}>
        <Text className='text-3xl text-white'>+</Text>
    </TouchableOpacity>
  )
}

export default FabButton