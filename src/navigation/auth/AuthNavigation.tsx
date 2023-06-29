import React,{useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import { UserLateralMenu } from '../user/UserLateralMenu';
import { AuthContext } from '../../context/authContext';
import LoadingScreen from '../../screens/auth/LoadingScreen';


const Stack = createStackNavigator();

export const AuthNavigation = () => {

   const {status,user} = useContext(AuthContext);

   if(status === 'cheking') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {
       (status !== 'authenticated')
       ?(
         <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
         </>
       )
       :(
         <Stack.Screen name="UserLateralMenu" component={UserLateralMenu} />
       )

      }
    </Stack.Navigator>
  );
};
