import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './src/screens/auth/LoginScreen';
// import RegisterScreen from './src/screens/auth/RegisterScreen';
import { AuthNavigation } from './src/navigation/auth/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>

      {/* <LoginScreen /> */}
      {/* <RegisterScreen/> */}
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
