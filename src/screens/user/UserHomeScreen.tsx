import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FabButton from '../../components/home/FabButton';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

const UserHomeScreen = ({navigation}:Props) => {

  return (

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
          onPress={()=> navigation.navigate('AgendarCitaScreen')}
        />
      </>
  );
};

export default UserHomeScreen;
