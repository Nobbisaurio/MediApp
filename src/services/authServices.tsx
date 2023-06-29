import { User } from '../interfaces/Credentials.Interface';
import { apiClient } from '../api/ApiMed';



// async  LogIn(credentials: Pick<User, 'email' | 'password'>) {
//   const res = await axios.post('auth/login', credentials)
//   return res.data
// }


const LogIn = async (credentials: Pick<User, 'email' | 'password'>): Promise<User> => {

  const res = await apiClient.post('/auth/login', credentials)
  return res.data


}



const getUsers = async () => {

  const res = await apiClient.get('/user');
  return res.data

}

export {
  LogIn,
  getUsers
}




