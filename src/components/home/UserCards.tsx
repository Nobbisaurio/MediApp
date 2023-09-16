import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';



interface UserCardsProps {
  id: string
  uri: string
  img: string
  medicName: string,
  especialidad: string,
  correo: string
  cedula: number
  deleteUser: (id: string) => void

}

const UserCards = ({ uri, img, cedula, correo, especialidad, medicName, deleteUser, id}: UserCardsProps) => {
  return (
    <View className='flex-1 items-center'>
      <View className='bg-white w-5/6 h-[250] my-3 rounded-md p-5'>
        <View className='flex-1 flex-row flex-wrap'>
          <View className=''>
            <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
          </View>
          <View className='ml-2 justify-center'>
            <Image source={{ uri, height: 34, width: 34 }} />
          </View>
          <View className='justify-center ml-3'>
            <Text className='font-bold'>Informacion del Medico</Text>
          </View>
          <View className='items-center w-[80] '>
            <Image source={{ uri: img, width: 80, height: 110 }} />
          </View>
          <View className='p-2 ml-3'>
            <Text className='font-bold uppercase'>Nombre:</Text>
            <Text className=' uppercase'>{medicName}</Text>
          </View>
          <View className='p-2 ml-3 absolute left-[80] top-[70]'>
            <Text className='font-bold uppercase'>Especialidad:</Text>
            <Text className=' uppercase'>{especialidad}</Text>
          </View>
          <View className='p-2 ml-3 absolute left-[80] top-[105]'>
            <Text className='font-bold uppercase'>Correo:</Text>
            <Text className=' uppercase'>{correo}</Text>
          </View>
          <View className='mt-2  absolute left-[0] top-[150]'>
            <Text className='font-bold uppercase'>NUI: {cedula}</Text>
          </View>
        </View>
        <View className='flex-wrap flex-row items-center w-full justify-evenly  '>
          <TouchableOpacity className='bg-rose-500 p-2 rounded-md' onPress={() => deleteUser(id)}>
            <Text className='text-white text-md'>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default UserCards
