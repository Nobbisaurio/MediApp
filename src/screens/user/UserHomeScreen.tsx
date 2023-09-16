import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FabButton from '../../components/home/FabButton';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/authContext';
import apiClient from '../../api/ApiMed';
import UserCards from '../../components/home/UserCards';
import Cards from '../../components/home/Cards';
// import UserCards from '../../components/home/userCards';

interface Props extends StackScreenProps<any, any> { }

const UserHomeScreen = ({ navigation }: Props) => {
  const img = 'https://thumbs.dreamstime.com/b/default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-114321029.jpg'
  const uri = 'https://images.emojiterra.com/google/android-pie/512px/2695.png'
  const { user } = useContext(AuthContext)

  const [medicsArr, setMedicArr] = useState<any[]>([])
  const [citasArr, setCitasArr] = useState<any[]>([])

  useEffect(() => {
    getMedic().then(res => {
      const medics: any[] = [];
      (res.data as any[]).forEach(medic => {
        medics.push(medic)
      })
      return setMedicArr(medics)
    }).catch(err => console.log(err.response.data))

  }, [medicsArr])

  useEffect(() => {

    getappointment(user?.id!)

  }, [citasArr])

  const getappointment = async (id: string) => {
    const res = await apiClient.get(`user/${id}`).then(res => {
      setCitasArr(res.data.appointment)

    })

  }

  const editAppointment = async (id: number, data: object) => {
    const res = await apiClient.patch(`/appointment/${id}`, data)
  }

  const onAsist = (id: number, data: object) => {
    Alert.alert('Informacion', 'Estas Seguro que asistio a la cita', [{
      text: 'Cancelar',
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: () => {
        data = {
          status: 'attended'
        }
        editAppointment(id,data)
      }
    }])
  }
  const onNoAsist = (id: number, data: object) => {
    Alert.alert('Informacion', 'Estas Seguro que no asistio a la cita', [{
      text: 'Cancelar',
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: () => {
        data = {
          status: 'lost'
        }
        editAppointment(id,data)
      }
    }])
  }





  const getMedic = async () => {
    const res = await apiClient.get('/user/medic/get')
    return res
  }


  const deleteMedic = async (id: string) => {
    Alert.alert('Eliminar Personal', 'Estas seguro que quieres eliminar al personal', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Eliminar',
        onPress: async () => {
          try {
            const res = await apiClient.delete(`user/medic/delete/${id}`)
          } catch (error: any) {

          }
        }
      }
    ])
  }


  const updatemedic = async () => {
    navigation.navigate('AgendarCitaScreen')
  }

  return (

    <>

      {
        (user?.role?.name === 'pacient') && (
          <>
            <ScrollView className='bg-slate-200 flex-1'>
              <View className=" items-center ">
                {
                  citasArr.filter(cita => cita.status === 'pending').map(cita => (
                    <Cards
                      key={cita.id}
                      id={cita.id}
                      fecha={new Date(cita.date).toDateString()}
                      hora={cita.hour.toString()}
                      estado={cita.status}
                    />
                  ))
                }
              </View>
            </ScrollView>
            <FabButton
              onPress={() => navigation.navigate('AgendarCitaScreen')}
            />
          </>
        )

      }

      {

        (user?.role?.name === 'admin') && (
          <>
            <ScrollView className='bg-slate-200'>
              {
                medicsArr.map(medic => (
                  <UserCards
                    cedula={medic.profile.idCard}
                    correo={medic.email}
                    especialidad={medic.speciality}
                    img={img}
                    medicName={medic.firstname.concat(" ", medic.profile.lastname)}
                    uri={uri}
                    key={medic.id}
                    deleteUser={() => deleteMedic(medic.id)}
                    id={medic.id}

                  />
                ))
              }


            </ScrollView>
            <FabButton onPress={() => navigation.navigate('AgendarCitaScreen')} />
          </>
        )
      }
      {

        (user?.role?.name === 'medic') && (
          <>
            <ScrollView className='bg-slate-200 flex-1'>
              <View className=" items-center ">
                {
                  citasArr.filter(cita => cita.status === 'pending').map(cita => (
                    <Cards
                      key={cita.id}
                      id={cita.id}
                      fecha={cita.date}
                      hora={cita.hour}
                      estado={cita.status}
                      onAsist={() => onAsist(cita.id, cita.status)}
                      onNoAsist={()=>onNoAsist(cita.id,cita.status)}
                    />
                  ))
                }
              </View>
            </ScrollView>
          </>
        )
      }

    </>
  );
};

export default UserHomeScreen;
