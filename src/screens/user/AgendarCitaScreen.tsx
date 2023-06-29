import React from 'react'
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import InputAuthComponent from '../../components/authComponent/InputAuthComponent';
import InputComponent from '../../components/home/InputComponent';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../context/authContext';
import { useForm } from '../../hooks/useForm';

const AgendarCitaScreen = () => {

  const [isOpenDate, setIsOpenDate] = useState(false)
  const [isOpenTime, setIsOpenTime] = useState(false)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  const {email,firstname,password,profile,role,onChange} = useForm({
    firstname: "",
    email: "",
    password: "",
    profile: {
      lastname: '',
      idCard: null,
      phone: null,
    },
    role: {
      name: ''
    }
  })


  const { user } = useContext(AuthContext)

  const emailGenerated = {

  }
  return (

    <>
      {
        (user?.role?.name === 'pacient') && (
          <>
            <View className='flex-1 bg-slate-200 items-center '>
              <View className=' w-5/6 items-center mt-10'>
                <TextInput
                  placeholder='ingrese su nombre'
                  className='w-5/6 border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                  defaultValue={user?.firstname!.concat('', user.profile?.lastname!)}
                  editable={false}
                />
                <View className=' w-5/6 flex-wrap flex-row'>
                  <View className='w-9/12'>
                    <TextInput
                      placeholder='seleccione la fecha'
                      className='w-full border rounded-md border-slate-500 bg-white  pl-2 text-center'
                      value={`${date.toLocaleDateString()}`}
                      editable={false}
                    />
                  </View>
                  <View className='w-3/12 justify-center items-end'>
                    <TouchableOpacity className='  bg-slate-500 p-1 rounded-md ' onPress={() => setIsOpenDate(true)} >
                      <Icon name='calendar-outline' size={40} color={'white'} />
                      <DatePicker
                        modal
                        open={isOpenDate}
                        date={date}
                        onConfirm={(date) => {
                          setIsOpenDate(false)
                          setDate(date)
                        }}
                        onCancel={() => {
                          setIsOpenDate(false)
                        }}
                        mode='date'
                        minimumDate={new Date()}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className=' w-5/6 flex-wrap flex-row mt-2'>
                  <View className='w-9/12'>
                    <TextInput
                      placeholder='seleccione la Hora'
                      className='w-full border rounded-md border-slate-500 bg-white  pl-2 text-center'
                      value={`${time.toLocaleTimeString()}`}
                      editable={false}
                    />
                  </View>
                  <View className='w-3/12 justify-center items-end'>
                    <TouchableOpacity className='  bg-slate-500 p-1 rounded-md ' onPress={() => setIsOpenTime(true)} >
                      <Icon name='time-outline' size={40} color={'white'} />
                      <DatePicker
                        modal
                        open={isOpenTime}
                        date={time}
                        onConfirm={(time) => {
                          setIsOpenTime(false)
                          setTime(time)
                        }}
                        onCancel={() => {
                          setIsOpenTime(false)
                        }}
                        mode='time'

                      />
                    </TouchableOpacity>
                  </View>
                </View>


              </View>
            </View>
          </>
        )
      }

      {
        (user?.role?.name === 'admin') && (
          <>
            <ScrollView className='bg-slate-200 '>
              <View className='flex-1 '>
                <View className=' w-full items-center mt-10'>
                  <View className='w-5/6 '>
                    <TextInput
                      placeholder='Nombre'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                      editable={false}
                    />
                    <TextInput
                      placeholder='Apellido'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                    />
                    <TextInput
                      placeholder='Correo'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                      editable={false}
                    />
                    <TextInput
                      placeholder='Contraseña'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                      editable={false}
                    />
                    <TextInput
                      placeholder='Cedula'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                      editable={false}
                    />
                    <TextInput
                      placeholder='Telefono'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-2 text-center'
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        )
      }

    </>

  )
}

export default AgendarCitaScreen
