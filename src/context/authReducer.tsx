import { Prueba as User } from '../interfaces/LoginRequest';


export interface AuthState {
  errMessage: string;
  user: User | null
  status: 'cheking' | 'authenticated' | 'not-authenticated'
}


type AuthAction =
  | { type: 'singUp', payload: { user:User } }
  | { type: 'addError', payload: string }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logOut' }



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case "addError":
      return {
        ...state,
        user: null,
        errMessage: action.payload,
        status: 'not-authenticated',

      }
    case "removeError":
      return {
        ...state,
        errMessage: '',
      }
    case "singUp":
      return {
        ...state,
        errMessage: '',
        status: 'authenticated',
        user: action.payload.user

      }
    case "notAuthenticated":
    case "logOut":
      return{
        ...state,
        status: 'not-authenticated',
        user: null
      }

    default:
      return state;
  }


}


