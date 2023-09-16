import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext,useEffect,useState } from 'react'
import { AuthContext } from '../../context/authContext'
import apiClient from '../../api/ApiMed'
import { View,ScrollView } from 'react-native'
import Cards from '../../components/home/Cards'
import FabButton from '../../components/home/FabButton'


interface Props extends StackScreenProps<any, any> { }

const CitasHistory = ({navigation}:Props) => {
  const [citasArr, setCitasArr] = useState<any[]>([])

  const { user } = useContext(AuthContext)

  useEffect(() => {
    getappointment(user?.id!)
  }, [citasArr])


  const getappointment = async (id:string) => {
    const res = await apiClient.get(`user/${id}`).then(res=>{
      setCitasArr(res.data.appointment)

    })

  }
  return (
    <>
      {
        (user?.role.name === 'pacient')&&(
          <>
            <ScrollView className='bg-slate-200 flex-1'>
              <View className=" items-center ">
                {
                  citasArr.map(cita=>(
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
        (user?.role.name === 'medic')&&(
          <>
            <ScrollView className='bg-slate-200 flex-1'>
              <View className=" items-center ">
                {
                  citasArr.filter(cita=>cita.status === 'lost').map(cita=>(
                    <Cards
                      key={cita.id}
                      id={cita.id}
                      fecha={new Date(cita.date).toDateString()}
                      hora={cita.hour.toString()}
                      estado={cita.status}
                      page='historial'
                    />
                  ))
                }
              </View>
            </ScrollView>

          </>
        )
      }
    </>
  )
}

export default CitasHistory
