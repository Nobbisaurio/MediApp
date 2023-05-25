import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';

const App = () => {
  return (
    <View className="flex-1" >
      {/* <LoginScreen /> */}
      <RegisterScreen/>
    </View>
  );
};

export default App;
