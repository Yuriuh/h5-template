import Axios from 'axios'

export const axios = Axios.create({
  baseURL: '',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foo' },
})

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response.data ? response.data : response
  },
  error => {
    return Promise.reject(error)
  }
)
