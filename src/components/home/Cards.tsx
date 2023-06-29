import React from 'react'
import { View, Text } from 'react-native';

interface CardsProps{
  fecha: number
  hora: number
  especialidad: string
  paciente?:string
  doctor?:string
}

const Cards = () => {
  return (
    <View className="bg-white w-4/6 my-3 rounded-md p-5">
      <Text className="text-xl py-1" >Fecha: 27/01/2022</Text>
      <Text className="text-xl py-1" >Hora: 8:00 am</Text>
      <Text className="text-xl py-1" >Especialidad: Odontologia</Text>
      <Text className="text-xl py-1" >Doctor: Benito Camelo</Text>
    </View>
  )
}

export default Cards
