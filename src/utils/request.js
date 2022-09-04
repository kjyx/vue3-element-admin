import axios from 'axios'
import {getToken} from '@/utils/Token'
let request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use((config) => {
  // config.headers['Authorization'] = getToken()
  return config
})


request.interceptors.response.use((response) => {
  return response
})

export default request
