import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native';
import InputAuthComponent from '../../components/authComponent/InputAuthComponent';
import InputComponent from '../../components/home/InputComponent';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const AgendarCitaScreen = () => {

  const [isOpen, setisOpen] = useState(false)
  const [date, setDate] = useState(new Date())


  return (
    <View className='flex-1 bg-slate-200 items-center '>
      <View className='flex-1 w-5/6 items-center mt-10'>
        <TextInput placeholder='ingrese su nombre' className='w-5/6 border rounded-md border-slate-500 bg-white m-2 pl-2'  defaultValue='david castro' editable={false} />

        <View className=' w-5/6 flex-row justify-between'>
          <TouchableOpacity onPress={()=>setisOpen(true)} className='w-2/6 h-[50px] bg-slate-500 rounded-md items-center justify-center' >
            <Icon name='calendar-outline' size={25} color={'white'}/>
            <DatePicker modal open={isOpen} date={date} onCancel={()=>setisOpen(false)} mode='date' androidVariant='nativeAndroid' onConfirm={(date)=>{setisOpen(false); setDate(date)}} theme='dark'/>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>setisOpen(true)}className='w-2/6 h-[50px] bg-slate-500 rounded-md items-center justify-center' >
            <Icon name='alarm-outline' size={25} color={'white'} />
            <DatePicker modal open={isOpen} date={date} onCancel={()=>setisOpen(false)} mode='time'/>
          </TouchableOpacity> */}
        </View>
        
      </View>
    </View>
  )
}

export default AgendarCitaScreen