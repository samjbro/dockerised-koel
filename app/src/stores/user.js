import NProgress from 'nprogress'
import { http } from '@/services'

export const userStore = {
  login: (email, password) => {
    NProgress.start()

    return new Promise((resolve, reject) => {
      http.post('me', { email, password }, ({ data }) => {
        resolve(data)
      }, error => reject(error))
    })
  }
}
