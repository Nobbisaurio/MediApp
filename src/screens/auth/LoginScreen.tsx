import React from 'react';
import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import usePassword from '../../hooks/usePassword';





const LoginScreen = () => {

    const {hidePassword,showPassword,hidePasswordIcon} = usePassword();

  return (
    <View className='flex-1 bg-slate-200 justify-center items-center'>
        <View className='h-5/6 w-full'>
            <View className='items-center'>
                <Image
                    source={{uri:'https://images.emojiterra.com/google/android-pie/512px/2695.png'}}
                    className="w-24 h-24 "
                />
                <Text className='text-3xl mt-8'>Name of Institution</Text>
            </View>
            <View className='mt-24 items-center '>
                <View className='w-11/12 my-2 flex-row items-center justify-center   rounded-lg p-2' >
                    {/* icono */}
                    <View className='bg-white w-2/12 h-12 justify-center items-center rounded-l-xl'>
                        <Icon name='at-outline' size={15} color='#999999' />
                    </View>
                    <View className='w-9/12 border-l-2 border-slate-200 '>
                        <TextInput className='border-none rounded-r-xl bg-white pl-5 w-full ' placeholder='Correo'/>
                    </View>
                </View>
                <View className='w-11/12 my-2 flex-row items-center justify-center   rounded-lg p-2'>
                    <View className='bg-white w-2/12 h-12 justify-center items-center rounded-l-xl'>
                        {/* icono */}
                        <Icon name='lock-closed-outline' size={15} color='#999999'/>
                    </View>
                    <View className='w-7/12 border-l-2 border-slate-200'>
                        <TextInput className='border-none  bg-white pl-5 w-full' placeholder='Contraseña' secureTextEntry = {hidePassword}  />
                    </View>
                    <TouchableOpacity className='bg-white h-12 w-2/12 items-center justify-center rounded-r-xl' onPress={showPassword}>
                        <Icon name={hidePasswordIcon} size={17}  />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='items-center mt-8'>
                <TouchableOpacity className='border-2 border-blue-600 w-10/12 h-10 rounded-xl items-center justify-center bg-blue-500'>
                    <Text className='text-white'>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>
            <View className='items-center  w-full  flex-1 flex-col justify-end'>
                <TouchableOpacity >
                    <Text className='text-blue-700 underline mt-5'>Crear una cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default LoginScreen;
