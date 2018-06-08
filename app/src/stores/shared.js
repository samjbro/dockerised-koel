import { http } from '@/services'

export const sharedStore = {
  state: {
    currentUser: null
  },

  init () {
    return new Promise((resolve, reject) => {
      http.get('data', ({data}) => {
        this.state = Object.assign(this.state, data)
        resolve(this.state)
      }, error => reject(error))
    })
  }
}
