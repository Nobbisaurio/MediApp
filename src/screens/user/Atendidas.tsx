import React,{useEffect,useContext,useState} from 'react'
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../../components/home/Cards';
import { AuthContext } from '../../context/authContext';
import apiClient from '../../api/ApiMed';
import { StackScreenProps } from '@react-navigation/stack';
import FabButton from '../../components/home/FabButton';




interface Props extends StackScreenProps<any, any> { }

const Atendidas = ({navigation}:Props) => {
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
        (user?.role.name !== 'admin')&&(
          <>
            <ScrollView className='bg-slate-200 flex-1'>
              <View className=" items-center ">
                {
                  citasArr.filter(cita=> cita.status === 'attended').map(cita=>(
                    <Cards
                      id={cita.id}
                      key={cita.id}
                      fecha={new Date(cita.date).toDateString()}
                      hora={cita.hour.toString()}
                      estado={cita.status}
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

export default Atendidas
