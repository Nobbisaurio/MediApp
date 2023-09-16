import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserHomeScreen from '../../screens/user/UserHomeScreen';
import Atendidas from '../../screens/user/Atendidas';
import CitasHistory from '../../screens/user/CitasHistory';
import { AuthContext } from '../../context/authContext';
import React, { useContext } from 'react';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {

  const { user } = useContext(AuthContext)
  const pageName = (user?.role.name === 'pacient')?'Historial':'Perdidas'

  return (
    <>
      <Tab.Navigator screenOptions={{}}>

        <Tab.Screen name="Home" options={{ title: 'Agendadas' }} component={UserHomeScreen} />
        <Tab.Screen name="Atendidas" component={Atendidas} />
        <Tab.Screen name="CitasHistory" options={{ title: pageName }} component={CitasHistory} />

      </Tab.Navigator>
    </>
  );
}
