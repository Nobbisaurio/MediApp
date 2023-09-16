import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/authContext';

interface CardsProps {
  fecha: string
  hora: string
  estado: string
  id: string
  page? : string
  onAsist?: (id: string, status: string) => void
  onNoAsist?: (id: string, status: string) => void
}

const Cards = ({ estado, fecha, hora, onAsist, onNoAsist, id ,page}: CardsProps) => {

  const { user } = useContext(AuthContext)
  return (
    <>
      {
        (user?.role.name === 'pacient') && (
          <>
            <View className="bg-white w-4/6 my-5 rounded-md p-5">
              <Text className="text-xl py-1" >Fecha: {fecha}</Text>
              <Text className="text-xl py-1" >Hora: {hora}</Text>
              <Text className="text-xl py-1" >Estado: {estado}</Text>
            </View>
          </>
        )
      }
      {
        (user?.role.name === 'medic'&& estado === 'pending') && (
          <>
            <View className="bg-white w-4/6 my-5 rounded-md p-5">
              <Text className="text-xl py-1" >Fecha: {fecha}</Text>
              <Text className="text-xl py-1" >Hora: {hora}</Text>
              <Text className="text-xl py-1" >Estado: {estado}</Text>
              <View className='w-full flex-row justify-evenly mt-5'>
                <TouchableOpacity className='bg-slate-500 p-2 rounded-md' onPress={() => onAsist!(id, estado)}>
                  <Text className='text-white text-lg'>Asiste</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-rose-500 p-2 rounded-md' onPress={() => onNoAsist!(id, estado)}>
                  <Text className='text-white text-lg'>No Asiste</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )
      }
      {
        (user?.role.name === 'medic' &&   estado !== 'pending'  ) && (
          <View className="bg-white w-4/6 my-5 rounded-md p-5">
            <Text className="text-xl py-1" >Fecha: {fecha}</Text>
            <Text className="text-xl py-1" >Hora: {hora}</Text>
            <Text className="text-xl py-1" >Estado: {estado}</Text>
          </View>
        )
      }


    </>

  )
}

export default Cards
