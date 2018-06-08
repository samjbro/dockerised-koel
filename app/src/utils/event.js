import Vue from 'vue'
// import { each } from 'lodash'

class EventBus {
  constructor () {
    this.bus = new Vue()
  }

  emit (name, ...args) {
    return this.bus.$emit(name, ...args)
  }

  on () {
    return this.trigger(this.bus.$on, ...arguments)
  }

  off (...args) {
    return this.bus.$off(...args)
  }

  once (...args) {
    return this.trigger(this.bus.$once, ...args)
  }

  trigger (func, ...args) {
    if (args.length === 2) {
      func.call(this.bus, args[0], args[1])
    } else {
      Object.keys(args[0]).forEach(key => func.call(this.bus, key, args[0][key]))
    }
    return this
  }

  register () {
    Vue.prototype.$vuebus = this
  }
}

const event = new EventBus()

event.$names = {
  LOG_OUT: 'LOG_OUT',
  KOEL_READY: 'KOEL_READY',
  LOAD_MAIN_VIEW: 'LOAD_MAIN_VIEW'
}

export { event }
