import React, { useContext, useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import UserHomeScreen from '../../screens/user/UserHomeScreen';
import { View } from 'react-native';
import AvatarMenu from '../../components/lateralMenu/AvatarMenu';
import MenuOption from '../../components/lateralMenu/MenuOption';
import Logout from '../../components/lateralMenu/Logout';
import Charts from '../../screens/user/Charts';
import AgendarCitaScreen from '../../screens/user/AgendarCitaScreen';
import Modal from "react-native-modal";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ModallateralMenu from '../../components/lateralMenu/ModalLateralMenu';
import { AuthContext } from '../../context/authContext';
import { MyTabs } from './TopBar';
import SettingsScreen from '../../screens/user/Settings';




const Drawer = createDrawerNavigator();


export const UserLateralMenu = () => {
  const { user } = useContext(AuthContext)

  const screenName = (user?.role?.name === 'admin') ? 'Agregar Personal' : 'Agendar Cita'

  return (
    <Drawer.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "#64748b" }, drawerStyle: { backgroundColor: '#e2e8f0' }, headerTintColor: 'white' }}
      drawerContent={UserMenu}
    >

      {
        (user?.role.name === 'admin') ? (
          <>
            <Drawer.Screen name="Home" options={{ title: 'Home' }} component={UserHomeScreen} />
            <Drawer.Screen name="Estadisticas" component={Charts} />
            <Drawer.Screen name="AgendarCitaScreen" options={{ title: screenName }} component={AgendarCitaScreen} />
          </>
        ) :
          (
            <>
              <Drawer.Screen name="MyTabs" options={{ title: 'Tus citas' }} component={MyTabs} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="AgendarCitaScreen" options={{ title: screenName }} component={AgendarCitaScreen} />
            </>
          )
      }

      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};


// todo borrar y cambiar por back image


const UserMenu = ({ navigation }: DrawerContentComponentProps) => {

  const { user, logOut } = useContext(AuthContext)

  const urlImage = 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg';

  const [modal, setModal] = useState(false)
  const [avatarImage, setAvatarImage] = useState<any>(`${urlImage}`)

  const showModal = async () => {
    setModal(true)
  }

  const openCamera = async () => {
    setModal(false)
    await launchCamera({ mediaType: 'photo' }, (img) => {
      (img.assets)
        ?
        setAvatarImage(img.assets![0].uri)
        :
        setAvatarImage(avatarImage)
    })
  }

  const openGalery = async () => {
    setModal(false)
    await launchImageLibrary({ mediaType: 'photo' }, (img) => {

      (img.assets)
        ?
        setAvatarImage(img.assets![0].uri)
        :
        setAvatarImage(avatarImage)
    })



  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      {
        (user?.role?.name === 'pacient') && (
          <>
            <DrawerContentScrollView>
              <View>
                <AvatarMenu
                  urlImage={avatarImage}
                  userName={user.firstname!.concat(' ', user.profile?.lastname!).replace('null', '')}
                  imageContentStyle="items-center mt-5 border-2 border-slate-600 rounded-full "
                  imageStyle="w-28 h-28 rounded-full  "
                  textContentStyle="my-5 "
                  textStyle="text-3xl font-bold text-center text-white"
                  componentStyle="items-center bg-slate-500 -top-1"
                  changeAvatar={showModal}
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
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('Home')}
                />
                <MenuOption
                  componentStyle=" my-2 h-12 flex-row items-center mx-5 "
                  iconoContentStyle="justify-center mr-10"
                  iconName="calendar-outline"
                  optionName='Agendar Cita'
                  optionNameStyle="text-xl"
                  optionContentStyle=" w-full "
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('AgendarCitaScreen')}
                />

                <MenuOption
                  componentStyle=" my-2 h-12 flex-row items-center mx-5 "
                  iconoContentStyle="justify-center mr-10"
                  iconName="settings-outline"
                  optionName="Configuraciones"
                  optionNameStyle="text-xl "
                  optionContentStyle=" w-full "
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('SettingsScreen')}
                />
              </View>
            </DrawerContentScrollView>

            <Logout
              touchableStyle="h-12 "
              containerStyle="h-full justify-end items-center flex-row mx-5 "
              iconColor="red"
              iconName="exit-outline"
              iconSize={25}
              textStyle='text-xl font-semibold text-red-500'
              onPress={logOut}

            />
            <View>
              <Modal
                isVisible={modal}
                animationOut={'fadeOutDownBig'}
                className=' w-full m-0'
              >
                <View className=' flex-1 h-[235px] w-full bg-slate-600 absolute bottom-0 rounded-t-3xl'>
                  <ModallateralMenu iconName='camera-outline' buttonText='Tomar Foto' action={openCamera} />
                  <ModallateralMenu iconName='image-outline' buttonText='Escoger de la Galeria' action={openGalery} />
                  <ModallateralMenu buttonText='Cancelar' action={closeModal} />
                </View>
              </Modal>
            </View>
          </>
        )
      }

      {
        (user?.role?.name === 'admin') && (
          <>
            <DrawerContentScrollView>
              <View>
                <AvatarMenu
                  urlImage={avatarImage}
                  userName={user.firstname!.concat(' ', user.profile?.lastname!).replace('null', '')}
                  imageContentStyle="items-center mt-5 border-2 border-slate-600 rounded-full "
                  imageStyle="w-28 h-28 rounded-full  "
                  textContentStyle="my-5 "
                  textStyle="text-3xl font-bold text-center text-white"
                  componentStyle="items-center bg-slate-500 -top-1"
                  changeAvatar={showModal}
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
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('Home')}
                />
                <MenuOption
                  componentStyle=" my-2 h-12 flex-row items-center mx-5 "
                  iconoContentStyle="justify-center mr-10"
                  iconName="person-add-outline"
                  optionName='Agregar Personal'
                  optionNameStyle="text-xl"
                  optionContentStyle=" w-full "
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('AgendarCitaScreen')}
                />

                <MenuOption
                  componentStyle=" my-2 h-12 flex-row items-center mx-5 "
                  iconoContentStyle="justify-center mr-10"
                  iconName="settings-outline"
                  optionName="Configuraciones"
                  optionNameStyle="text-xl "
                  optionContentStyle=" w-full "
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('Home')}
                />
              </View>
            </DrawerContentScrollView>

            <Logout
              touchableStyle="h-12 "
              containerStyle="h-full justify-end items-center flex-row mx-5 "
              iconColor="red"
              iconName="exit-outline"
              iconSize={25}
              textStyle='text-xl font-semibold text-red-500'
              onPress={logOut}

            />
            <View>
              <Modal
                isVisible={modal}
                animationOut={'fadeOutDownBig'}
                className=' w-full m-0'
              >
                <View className=' flex-1 h-[235px] w-full bg-slate-600 absolute bottom-0 rounded-t-3xl'>
                  <ModallateralMenu iconName='camera-outline' buttonText='Tomar Foto' action={openCamera} />
                  <ModallateralMenu iconName='image-outline' buttonText='Escoger de la Galeria' action={openGalery} />
                  <ModallateralMenu buttonText='Cancelar' action={closeModal} />
                </View>
              </Modal>
            </View>
          </>
        )
      }
      {
        (user?.role?.name === 'medic') && (
          <>
            <DrawerContentScrollView>
              <View>
                <AvatarMenu
                  urlImage={avatarImage}
                  userName={user.firstname!.concat(' ', user.profile?.lastname!).replace('null', '')}
                  imageContentStyle="items-center mt-5 border-2 border-slate-600 rounded-full "
                  imageStyle="w-28 h-28 rounded-full  "
                  textContentStyle="my-5 "
                  textStyle="text-3xl font-bold text-center text-white"
                  componentStyle="items-center bg-slate-500 -top-1"
                  changeAvatar={showModal}
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
                  iconColor='black'
                  iconSize={25}
                  navigation={() => navigation.navigate('Home')}
                />
                <MenuOption
                  componentStyle=" my-2 h-12 flex-row items-center mx-5 "
                  iconoContentStyle="justify-center mr-10"
                  iconName="settings-outline"
                  optionName="Configuraciones"
                  optionNameStyle="text-xl "
                  optionContentStyle=" w-full "
                  iconColor='black '
                  iconSize={25}
                  navigation={() => navigation.navigate('Home')}
                />
              </View>
            </DrawerContentScrollView>

            <Logout
              touchableStyle="h-12 "
              containerStyle="h-full justify-end items-center flex-row mx-5 "
              iconColor="red"
              iconName="exit-outline"
              iconSize={25}
              textStyle='text-xl font-semibold text-red-500'
              onPress={logOut}

            />
            <View>
              <Modal
                isVisible={modal}
                animationOut={'fadeOutDownBig'}
                className=' w-full m-0'
              >
                <View className=' flex-1 h-[235px] w-full bg-slate-600 absolute bottom-0 rounded-t-3xl'>
                  <ModallateralMenu iconName='camera-outline' buttonText='Tomar Foto' action={openCamera} />
                  <ModallateralMenu iconName='image-outline' buttonText='Escoger de la Galeria' action={openGalery} />
                  <ModallateralMenu buttonText='Cancelar' action={closeModal} />
                </View>
              </Modal>
            </View>
          </>
        )
      }

    </>
  );
};
