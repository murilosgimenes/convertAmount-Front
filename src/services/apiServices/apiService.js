import axios from 'axios'
import {Notify} from 'quasar'

const api = axios.create({baseURL: process.env.API_URL, timeout: process.env.AXIOS_TIMEOUT})

api.interceptors.request.use((req) => {
  req.headers.authorization = `Bearer ${process.env.TOKEN}`
  req.headers['Access-Control-Allow-Origin'] = '*';

  return req;
})

api.interceptors.response.use((res) => res,
  (error) => {
    console.log(error.response.data)

    if (error.response.data.errorCode > 0) {
      Notify.create({
        type: 'alert',
        message: error.response.data.userMessage
      })
    }

    if (error.code === 'ECONNABORTED') {
      Notify.create({
        type: 'error',
        message: 'Server can no be requested'
      })
    }

    if (error.response?.status === 401) {
      Notify.create({
        type: 'error',
        message: 'Session expired'
      })
    }
    return Promise.reject(error);
  })
export default api
