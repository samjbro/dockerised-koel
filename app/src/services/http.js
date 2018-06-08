import axios from 'axios'
import {event} from '@/utils'
import {ls} from '@/services'

export const http = {
  request: (method, url, data, successCb = null, errorCb = null) => {
    axios.request({url, data, method: method.toLowerCase()}).then(successCb).catch(errorCb)
  },

  get (url, successCb = null, errorCb = null) {
    return this.request('get', url, {}, successCb, errorCb)
  },

  post (url, data, successCb = null, errorCb = null) {
    return this.request('post', url, data, successCb, errorCb)
  },

  init: () => {
    axios.defaults.baseURL = 'api'

    axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${ls.get('jwt-token')}`
      return config
    })

    axios.interceptors.response.use(response => {
      const token = response.headers['Authorization'] || response.data['access_token']
      token && ls.set('jwt-token', token)
      return response
    }, error => {
      if (error.response.status === 400 || error.response.status === 401) {
        if (!(error.config.method === 'post' && /\/api\/me\/?$/.test(error.config.url))) {
          event.emit(event.$names.LOG_OUT)
        }
      }
      return Promise.reject(error)
    })
  }
}
