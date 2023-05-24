import React from 'react'
import { View, Text, Image, TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
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
                <View className='w-11/12 my-2 ' >
                    {/* icono */}
                    <TextInput className='border-2 border-slate-200 rounded-xl bg-white pl-5 ' placeholder='Email'/>
                </View>
                <View className='w-11/12 my-2'>
                    {/* icono */}
                    <TextInput className='border-2 border-slate-200 rounded-xl bg-white pl-5 ' placeholder='Password'/>
                </View>
            </View>
            <View className='items-center mt-8'>
                <TouchableOpacity className='border-2 border-blue-600 w-11/12 h-10 rounded-xl items-center justify-center bg-blue-500'>
                    <Text className='text-white'>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default LoginScreen;