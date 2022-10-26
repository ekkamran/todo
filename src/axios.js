import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://todo-d97da-default-rtdb.firebaseio.com',
  timeout: 5000
})

export default instance
