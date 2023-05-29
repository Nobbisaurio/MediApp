import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import UserHomeScreen from '../../screens/user/UserHomeScreen';
import { View } from 'react-native';
import AvatarMenu from '../../components/lateralMenu/AvatarMenu';
import MenuOption from '../../components/lateralMenu/MenuOption';
import Logout from '../../components/lateralMenu/Logout';
import Charts from '../../screens/user/Charts';


const Drawer = createDrawerNavigator();


export const UserLateralMenu = () => {
  return (
    <Drawer.Navigator
    drawerContent={ UserMenu}
    >
      <Drawer.Screen  name="UserHomeScreen" component={UserHomeScreen} />
      <Drawer.Screen  name="Charts" component={Charts} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};


// todo borrar y cambiar por back image
const urlImage = 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg';


const UserMenu = ({navigation}: DrawerContentComponentProps)=>{
  return (
    <>
      <DrawerContentScrollView>
        <View>
          <AvatarMenu
            urlImage={urlImage}
            userName="Nombre del usuario"
            imageContentStyle="items-center mt-5"
            imageStyle="w-28 h-28 rounded-full"
            textContentStyle="my-5 "
            textStyle="text-3xl font-bold text-center"
            />
        </View>
        <View >
          <MenuOption
            componentStyle=" my-2 h-12 flex-row items-center mx-5 "
            iconoContentStyle="justify-center mr-10"
            iconName="person-circle-outline"
            optionName="Home"
            optionNameStyle="text-xl "
            optionContentStyle=" w-full "
            iconColor=''
            iconSize={25}
            navigation={()=>navigation.navigate('UserHomeScreen')}
          />
          <MenuOption
            componentStyle=" my-2 h-12 flex-row items-center mx-5 "
            iconoContentStyle="justify-center mr-10"
            iconName="calendar-outline"
            optionName="Agendar Cita"
            optionNameStyle="text-xl"
            optionContentStyle=" w-full "
            iconColor=''
            iconSize={25}
          />
          <MenuOption
            componentStyle=" my-2 h-12 flex-row items-center mx-5 "
            iconoContentStyle="justify-center mr-10"
            iconName="stats-chart"
            optionName="Estadisticas"
            optionNameStyle="text-xl "
            optionContentStyle=" w-full "
            iconColor=''
            iconSize={25}
            navigation={()=>navigation.navigate('Charts')}
          />
          <MenuOption
            componentStyle=" my-2 h-12 flex-row items-center mx-5 "
            iconoContentStyle="justify-center mr-10"
            iconName="chatbubble-outline"
            optionName="Contactos"
            optionNameStyle="text-xl"
            optionContentStyle=" w-full "
            iconColor=''
            iconSize={25}
          />
          <MenuOption
            componentStyle=" my-2 h-12 flex-row items-center mx-5 "
            iconoContentStyle="justify-center mr-10"
            iconName="settings-outline"
            optionName="Configuraciones"
            optionNameStyle="text-xl "
            optionContentStyle=" w-full "
            iconColor=''
            iconSize={25}
            navigation={()=>navigation.navigate('UserHomeScreen')}
          />
        </View>
      </DrawerContentScrollView>

      <Logout
        touchableStyle="h-12 "
        containerStyle="h-full justify-end items-center flex-row mx-5 "
        iconColor=""
        iconName="exit-outline"
        iconSize={25}
        textStyle='text-xl font-semibold'
      />

      {/* <TouchableOpacity className="h-12 bg-red-600">
        <View className="  h-full justify-end items-center flex-row mx-5 ">
          <View >
            <Text className="text-lg "> Cerrar Sesion </Text>
          </View>
          <View>
            <Text className="text-lg ">  h1 </Text>
          </View>
        </View>
      </TouchableOpacity> */}

    </>
  );
};
