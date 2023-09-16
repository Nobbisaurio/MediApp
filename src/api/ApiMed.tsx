import axios from "axios";


const baseURL = 'http://172.16.12.58:3000/api/v1'

const apiClient = axios.create({ baseURL })




export default apiClient



