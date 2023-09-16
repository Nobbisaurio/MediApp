//native Imports
import React, { useContext, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
//hooks
import usePassword from '../../hooks/usePassword';
//Components
import InputAuthComponent from '../../components/authComponent/InputAuthComponent';
import LogoAuthComponent from '../../components/authComponent/LogoAuthComponent';
import ButtonAuthComponent from '../../components/authComponent/ButtonAuthComponent';
//navigation
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/authContext';
import { Keyboard } from 'react-native';



const imageUrl: string = 'https://images.emojiterra.com/google/android-pie/512px/2695.png';

interface Props extends StackScreenProps<any, any> { }


const LoginScreen = ({ navigation }: Props) => {


  const { singIn, errMessage,removeError } = useContext(AuthContext)

  const { hidePassword, showPassword, hidePasswordIcon } = usePassword();
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errMessage.length === 0) return;

    Alert.alert('Login Error:',errMessage.toString().split(",").join('. \n'),[{
        text: 'vale',
        onPress:removeError
      }]
      );
  }, [errMessage])






  const onLogin = async () => {
    Keyboard.dismiss();
    singIn({ email, password })
  };



  return (



    <ScrollView className="flex-1 bg-slate-200 ">
      <View className="flex-1 w-full mt-10">

        <LogoAuthComponent urlImage={imageUrl} institutionName="Name of Institution" />

        <View className="mt-24 items-center ">
          <InputAuthComponent
            icon={{ color: '#999999', firstIcon: 'at-outline', size: 15 }}
            placeholder="Correo"
            autoCapitalize='none'
            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitionEditing={onLogin}
          />
          <InputAuthComponent
            icon={{ color: '#999999', firstIcon: 'lock-closed-outline', size: 15, secondIcon: `${hidePasswordIcon}` }}
            placeholder="Contraseña"
            hidePassword={hidePassword}
            showPassword={showPassword}
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitionEditing={onLogin}
          />
        </View>

        <View className="items-center mt-8">
          <ButtonAuthComponent
            buttonName="Iniciar Sesion"
            textStyle="text-white"
            touchableStyle="border-2 border-blue-600 w-10/12 h-10 rounded-xl items-center justify-center bg-blue-500"
            onPress={onLogin}
          />
        </View>
        <View className="items-center h-full">
          <ButtonAuthComponent
            buttonName="Crear una cuenta"
            textStyle="text-blue-700 underline mt-5"
            touchableStyle=""
            onPress={() => navigation.replace('RegisterScreen')}
          />
        </View>
      </View>
    </ScrollView>


  );
};

export default LoginScreen;
