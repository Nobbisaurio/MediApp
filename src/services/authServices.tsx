import axios from 'axios'
import { User } from '../interfaces/Credentials.Interface';


const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})


// async  LogIn(credentials: Pick<User, 'email' | 'password'>) {
//   const res = await axios.post('auth/login', credentials)
//   return res.data
// }


const LogIn = async (credentials: Pick<User, 'email' | 'password'>) => {

  try {
    const res = await apiClient.post('/auth/login', credentials)
    return res
  } catch (error) {
    console.log(error)
  }
}

export {
  LogIn
}




