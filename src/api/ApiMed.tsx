import axios from "axios";


const baseURL = 'http://192.168.100.8:3000/api/v1'

const apiClient = axios.create({ baseURL })




export default apiClient



