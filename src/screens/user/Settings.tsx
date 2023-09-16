import React, { useContext } from 'react'
import { ScrollView, TouchableOpacity, View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../../context/authContext'
import { useForm } from '../../hooks/useForm'
import apiClient from '../../api/ApiMed'

const SettingsScreen = () => {
  const { user,logOut } = useContext(AuthContext)


  const { email, firstname, idCard, lastname, onChange, phone ,setState} = useForm({
    firstname: user?.firstname,
    lastname: user?.profile.lastname,
    email: user?.email,
    idCard: user?.profile.idCard,
    phone: user?.profile.phone
  })

  const profileData = {
    firstname,
    email,
    profile: {
      idCard: Number(idCard),
      phone: Number(phone),
      lastname: lastname
    }
  }




  const updateProfile = async (id: string) => {
    try {
      console.log(profileData)
      const res = await apiClient.post(`/user/${id}`, profileData)
    } catch (error:any) {
      console.log(error.response.data)
    }
  }

  const deleteUser = async(id:string)=>{
    Alert.alert('Advertencia','estas seguro que deseas eliminar definitivamente el usuario',[{
      text:'Cancelar',
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: async()=>{
        try {
          await apiClient.delete(`/user/${id}`)
          logOut()
        } catch (error:any) {
          console.log(error.response.data)
        }
      }
    }

  ])
  }

  return (
    <ScrollView className='flex-1 bg-slate-200 '>
      <View className='flex-1 items-center'>

        <View className=' w-5/6 items-center mt-10'>
          <TextInput
            onChangeText={(value) => onChange(value, 'firstname')}
            value={firstname}
            placeholder='Nombre'
            className='w-full border rounded-md border-slate-500 bg-white  pl-5  mt-4'
          />
          <TextInput
            onChangeText={(value) => onChange(value, 'lastname')}
            value={lastname!}
            placeholder='Apellido'
            className='w-full border rounded-md border-slate-500 bg-white  pl-5  mt-4'
            defaultValue={user?.profile.lastname!}

          />
          <TextInput
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            placeholder='Correo'
            className='w-full border rounded-md border-slate-500 bg-white  pl-5  mt-4'
            defaultValue={user?.email}
          />
          <TextInput
            onChangeText={(value) => onChange(value, 'idCard')}
            value={idCard!}
            inputMode='numeric'
            maxLength={10}
            placeholder='Cedula'
            className='w-full border rounded-md border-slate-500 bg-white  pl-5  mt-4'
            defaultValue={user?.profile.idCard!}
          />
          <TextInput
            onChangeText={(value) => onChange(value, 'phone')}
            value={phone!}
            maxLength={10}
            inputMode='numeric'
            placeholder='Telefono'
            className='w-full border rounded-md border-slate-500 bg-white  pl-5 mt-4 '
            defaultValue={user?.profile.phone!}
          />
        </View>
        <TouchableOpacity className='bg-slate-500 mt-8 rounded-md w-2/6' onPress={() => updateProfile(user?.id!)}>
          <Text className='text-lg p-2 text-white text-center'>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-rose-500 mt-8 rounded-md w-2/6' onPress={() => deleteUser(user?.id!)}>
          <Text className='text-lg p-2 text-white text-center'>Eliminar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </ScrollView>
  )
}

export default SettingsScreen
