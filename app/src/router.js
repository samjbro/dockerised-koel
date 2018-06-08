import { loadMainView } from '@/utils'

export default {
  routes: {
    '/home' () {
      loadMainView('home')
    },
    '/songs' () {
      loadMainView('songs')
    }
  },

  init () {
    this.loadState()
    window.addEventListener('popstate', () => this.loadState(), true)
  },

  loadState () {
    if (!window.location.hash) {
      return this.go('home')
    }

    Object.keys(this.routes).forEach(route => {
      const matches = window.location.hash.match(new RegExp(`^#!${route}$`))
      if (matches) {
        const [, ...params] = matches
        this.routes[route](...params)
        return false
      }
    })
  }
}
