import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../context/authContext';
import { useForm } from '../../hooks/useForm';
import apiClient from '../../api/ApiMed';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Prueba } from '../../interfaces/LoginRequest';




const AgendarCitaScreen = () => {
  const navigation = useNavigation()

  const [isOpenDate, setIsOpenDate] = useState(false)
  const [isOpenTime, setIsOpenTime] = useState(false)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [selectedMedic, setSelectedMedic] = useState('');
  const { user } = useContext(AuthContext)


  const DoctorSpeciality: 'odontologia' | 'urologia' | 'pediatria' | 'medicina general' | 'ginecologia' | 'psicologia' | null = 'medicina general'




  const formData = {
    firstname: "",
    email: "",
    password: "",
    lastname: '',
    idCard: '',
    phone: '',
    roleName: '',
    speciality: DoctorSpeciality
  }

  const { email, firstname, password, lastname, idCard, phone, speciality, onChange, setState } = useForm(formData)

  const appointmentData = useForm({
    date: date.toDateString(),
    hour: time.toTimeString(),
    status: 'pending',
    user: user?.id,
    medic: selectedMedic
  })

  const data = {
    firstname,
    email,
    password,
    profile: {
      lastname,
      idCard: Number(idCard),
      phone: Number(phone)
    },
    role: {
      name: 'medic'
    },
    speciality
  }



  interface MedicData extends Prueba { speciality: string }
  const [medics, setMedics] = useState<MedicData[]>([]);

  useEffect(() => {
    const getAllMedics = async () => {
      const medics = await apiClient.get<MedicData[]>('/user/medic/get').then(res => {
        setMedics(res.data);
      })
    }
    getAllMedics()
  }, [])


  const onSubmit = async () => {
    console.log(data)
    try {
      const res = await apiClient.post('/user/medic/post', data)
      setState(formData)
      navigation.navigate('Home' as never)
      return res
    } catch (error: any) {
      Alert.alert('Error', error.response.data.message.toString().split(",").join('. \n'))
    }
  }

  const addAppointment = async () => {
    try {
      const appointment = await apiClient.post('/appointment', { ...appointmentData.form, medic: selectedMedic })
      setSelectedMedic('')
      navigation.navigate('Home')

    } catch (error: any) {

      Alert.alert('Error', error.response.data.message.toString().split(",").join('. \n'))
    }

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
                  defaultValue={user?.firstname!.concat(' ', user.profile?.lastname!).replace('null', ' ')}
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
                  <View className=' w-full mt-2  border rounded-md border-slate-500 bg-white  pl-2 text-center'>
                    <Picker
                      selectedValue={selectedMedic}
                      onValueChange={(iVal, iIndx) => {
                        setSelectedMedic(iVal)
                      }}
                    >
                      <Picker.Item label="Select a Medic" value="" />
                      {
                        medics && medics.map(medic => (
                          <Picker.Item key={medic.id} label={medic.firstname!.concat(' ', medic.profile?.lastname!)} value={medic.id} />

                        ))
                      }
                    </Picker>
                  </View>
                </View>
              </View>
              <TouchableOpacity className='mt-5 bg-slate-500 p-2 rounded-md' onPress={addAppointment}>
                <Text className='text-white text-xl'>Agendar Cita</Text>
              </TouchableOpacity>
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
                      onChangeText={(value) => onChange(value, 'firstname')}
                      value={firstname}
                      placeholder='Nombre'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      onChangeText={(value) => onChange(value, 'lastname')}
                      value={lastname}
                      placeholder='Apellido'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      onChangeText={(value) => onChange(value, 'idCard')}
                      value={idCard!}
                      inputMode='numeric'
                      placeholder='Cedula'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      onChangeText={(value) => onChange(value, 'speciality')}
                      value={speciality!}
                      autoCapitalize='none'
                      placeholder='Especialidad'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      onChangeText={(value) => onChange(value, 'phone')}
                      value={phone!}
                      inputMode='numeric'
                      placeholder='Telefono'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      autoCapitalize='none'
                      onChangeText={(value) => onChange(value, 'email')}
                      value={email}
                      inputMode='email'
                      placeholder='Correo'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                    <TextInput
                      autoCapitalize='none'
                      onChangeText={(value) => onChange(value, 'password')}
                      value={password}
                      placeholder='Contraseña'
                      className=' border rounded-md border-slate-500 bg-white m-2 pl-6 '
                    />
                  </View>
                  <View className='mt-10  w-full items-center'>
                    <TouchableOpacity
                      className='w-3/6 bg-slate-500 items-center justify-center rounded-md h-10 border-slate-700'
                      onPress={onSubmit}
                    >
                      <Text className='text-white text-lg'>Añadir Personal</Text>
                    </TouchableOpacity>
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
