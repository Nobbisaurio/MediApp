import React, { createContext, useEffect, useReducer, useState } from 'react'
import { AuthState, authReducer } from './authReducer';
import { Credentials, RegisterCredentials } from '../interfaces/Credentials.Interface';
import apiClient from '../api/ApiMed';
import { Prueba as User } from '../interfaces/LoginRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';


type AuthContextProps = {
  errMessage: string;
  user: User | null
  status: 'cheking' | 'authenticated' | 'not-authenticated'
  singUp: (credentials: RegisterCredentials) => void
  singIn: (credentials: Credentials) => void
  logOut: () => void
  removeError: () => void

}


const authInitialState: AuthState = {
  status: 'cheking',
  user: null,
  errMessage: '',
}



export const AuthContext = createContext({} as AuthContextProps)


export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(authReducer, authInitialState);


  useEffect(() => {
    checkToken()
  }, [])



  const checkToken = async () => {
    const userToken = await AsyncStorage.getItem('token');
    if (!userToken) return dispatch({ type: 'notAuthenticated' });
    dispatch({
      type: 'singUp',
      payload: {
        user: { ...JSON.parse(userToken) }
      }
    })


  }


  const singIn = async ({ email, password }: Credentials) => {
    try {
      const { data } = await apiClient.post<User>('/auth/login', { email, password })
      dispatch({
        type: 'singUp',
        payload: {
          user: { ...data }
        }
      })
        ;

      await AsyncStorage.setItem('token', JSON.stringify(data));

    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Informacion Incorrecta'
      })
    }
  }
  const singUp = async ({ email, firstname, password }: RegisterCredentials) => {
    try {
      const { data } = await apiClient.post('/auth/register', { email, firstname, password })
      dispatch({
        type: 'singUp',
        payload: {
          user: { ...data }
        }
      })
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Informacion Incorrecta'
      })
    }
  }
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type:'logOut'
    })
  }

  const removeError = () => {
    dispatch({
      type: 'removeError',
    })
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      singUp,
      singIn,
      logOut,
      removeError,

    }}>
      {children}
    </AuthContext.Provider>
  )
}




