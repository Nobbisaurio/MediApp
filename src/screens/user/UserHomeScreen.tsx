import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FabButton from '../../components/home/FabButton';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/authContext';
// import UserCards from '../../components/home/userCards';

interface Props extends StackScreenProps<any, any> { }

const UserHomeScreen = ({ navigation }: Props) => {
  const img = 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/41/Stephen-Strange_-_Heroe.png/revision/latest?cb=20220703025553&path-prefix=es'
  const uri = 'https://images.emojiterra.com/google/android-pie/512px/2695.png'
  const { user } = useContext(AuthContext)

  return (

    <>
      {
        // console.log(user)
      }

      {
        (user?.role?.name === 'pacient') && (
          <>
            <ScrollView >
              <View className="bg-slate-200 flex-1 items-center  ">

                <Text className="self-start mt-5 text-2xl font-bold ml-5 text-slate-600 ">Tus Citas</Text>
                <View className="bg-white w-4/6 my-3 rounded-md p-5">
                  <Text className="text-xl py-1" >Fecha: 27/01/2022</Text>
                  <Text className="text-xl py-1" >Hora: 8:00 am</Text>
                  <Text className="text-xl py-1" >Especialidad: Odontologia</Text>
                  <Text className="text-xl py-1" >Doctor: Benito Camelo</Text>
                </View>
                <View className="bg-white w-4/6 my-3 rounded-md p-5">
                  <Text className="text-xl py-1" >Fecha: 27/01/2022</Text>
                  <Text className="text-xl py-1" >Hora: 8:00 am</Text>
                  <Text className="text-xl py-1" >Especialidad: Odontologia</Text>
                  <Text className="text-xl py-1" >Doctor: Benito Camelo</Text>
                </View>
                <View className="bg-white w-4/6 my-3 rounded-md p-5">
                  <Text className="text-xl py-1" >Fecha: 27/01/2022</Text>
                  <Text className="text-xl py-1" >Hora: 8:00 am</Text>
                  <Text className="text-xl py-1" >Especialidad: Odontologia</Text>
                  <Text className="text-xl py-1" >Doctor: Benito Camelo</Text>
                </View>
                <View className="bg-white w-4/6 my-3 rounded-md p-5">
                  <Text className="text-xl py-1" >Fecha: 27/01/2022</Text>
                  <Text className="text-xl py-1" >Hora: 8:00 am</Text>
                  <Text className="text-xl py-1" >Especialidad: Odontologia</Text>
                  <Text className="text-xl py-1" >Doctor: Benito Camelo</Text>
                </View>
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
              <View className='flex-1 items-center'>
                <View className='bg-white w-5/6 h-[210] my-3 rounded-md p-5'>
                  <View className='flex-1 flex-row flex-wrap'>
                    <View className=''>
                      <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
                    </View>
                    <View className='ml-2 justify-center'>
                      <Image source={{uri,height:34,width:34}} />
                    </View>
                    <View className='justify-center ml-3'>
                      <Text className='font-bold'>Informacion del Medico</Text>
                    </View>
                    <View className='items-center w-[80] '>
                      <Image source={{uri:img,width:80,height:110}}/>
                    </View>
                    <View className='p-2 ml-3'>
                      <Text className='font-bold uppercase'>Nombre:</Text>
                      <Text className=' uppercase'>Dr. Strange</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[70]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[105]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='mt-2  absolute left-[0] top-[150]'>
                      <Text className='font-bold uppercase'>NUI: 1728548544</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='flex-1 items-center'>
                <View className='bg-white w-5/6 h-[210] my-3 rounded-md p-5'>
                  <View className='flex-1 flex-row flex-wrap'>
                    <View className=''>
                      <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
                    </View>
                    <View className='ml-2 justify-center'>
                      <Image source={{uri,height:34,width:34}} />
                    </View>
                    <View className='justify-center ml-3'>
                      <Text className='font-bold'>Informacion del Medico</Text>
                    </View>
                    <View className='items-center w-[80] '>
                      <Image source={{uri:img,width:80,height:110}}/>
                    </View>
                    <View className='p-2 ml-3'>
                      <Text className='font-bold uppercase'>Nombre:</Text>
                      <Text className=' uppercase'>Dr. Strange</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[70]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[105]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='mt-2  absolute left-[0] top-[150]'>
                      <Text className='font-bold uppercase'>NUI: 1728548544</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='flex-1 items-center'>
                <View className='bg-white w-5/6 h-[210] my-3 rounded-md p-5'>
                  <View className='flex-1 flex-row flex-wrap'>
                    <View className=''>
                      <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
                    </View>
                    <View className='ml-2 justify-center'>
                      <Image source={{uri,height:34,width:34}} />
                    </View>
                    <View className='justify-center ml-3'>
                      <Text className='font-bold'>Informacion del Medico</Text>
                    </View>
                    <View className='items-center w-[80] '>
                      <Image source={{uri:img,width:80,height:110}}/>
                    </View>
                    <View className='p-2 ml-3'>
                      <Text className='font-bold uppercase'>Nombre:</Text>
                      <Text className=' uppercase'>Dr. Strange</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[70]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[105]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='mt-2  absolute left-[0] top-[150]'>
                      <Text className='font-bold uppercase'>NUI: 1728548544</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='flex-1 items-center'>
                <View className='bg-white w-5/6 h-[210] my-3 rounded-md p-5'>
                  <View className='flex-1 flex-row flex-wrap'>
                    <View className=''>
                      <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
                    </View>
                    <View className='ml-2 justify-center'>
                      <Image source={{uri,height:34,width:34}} />
                    </View>
                    <View className='justify-center ml-3'>
                      <Text className='font-bold'>Informacion del Medico</Text>
                    </View>
                    <View className='items-center w-[80] '>
                      <Image source={{uri:img,width:80,height:110}}/>
                    </View>
                    <View className='p-2 ml-3'>
                      <Text className='font-bold uppercase'>Nombre:</Text>
                      <Text className=' uppercase'>Dr. Strange</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[70]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[105]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='mt-2  absolute left-[0] top-[150]'>
                      <Text className='font-bold uppercase'>NUI: 1728548544</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className='flex-1 items-center'>
                <View className='bg-white w-5/6 h-[210] my-3 rounded-md p-5'>
                  <View className='flex-1 flex-row flex-wrap'>
                    <View className=''>
                      <Text className='uppercase text-center font-bold'>{`medic \n institution`}</Text>
                    </View>
                    <View className='ml-2 justify-center'>
                      <Image source={{uri,height:34,width:34}} />
                    </View>
                    <View className='justify-center ml-3'>
                      <Text className='font-bold'>Informacion del Medico</Text>
                    </View>
                    <View className='items-center w-[80] '>
                      <Image source={{uri:img,width:80,height:110}}/>
                    </View>
                    <View className='p-2 ml-3'>
                      <Text className='font-bold uppercase'>Nombre:</Text>
                      <Text className=' uppercase'>Dr. Strange</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[70]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='p-2 ml-3 absolute left-[80] top-[105]'>
                      <Text className='font-bold uppercase'>Especialidad:</Text>
                      <Text className=' uppercase'>Urologo</Text>
                    </View>
                    <View className='mt-2  absolute left-[0] top-[150]'>
                      <Text className='font-bold uppercase'>NUI: 1728548544</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <FabButton onPress={()=>navigation.navigate('AgendarCitaScreen')}/>
          </>
        )
      }

    </>
  );
};

export default UserHomeScreen;
