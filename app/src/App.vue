<template>
  <section class="app">
    <div
      v-if="authenticated"
      class="app__main">
      <main-wrapper/>
    </div>

    <template v-else>
      <div class="login-wrapper">
        <login-form @loggedin="onUserLoggedIn"/>
      </div>
    </template>
  </section>
</template>

<script>
import mainWrapper from '@/components/main-wrapper/index.vue'
import loginForm from '@/components/auth/login-form.vue'
import {ls} from '@/services'
import {event} from '@/utils'
import router from '@/router'
import {sharedStore} from '@/stores'

export default {
  components: {mainWrapper, loginForm},

  data () {
    return {
      authenticated: false
    }
  },

  mounted () {
    const token = ls.get('jwt-token')
    if (token) {
      this.authenticated = true
      this.init()
    }
  },

  created () {
    event.on({
      [event.$names.KOEL_READY]: () => router.init()
    })
  },

  methods: {
    async init () {
      try {
        await sharedStore.init()
        event.emit(event.$names.KOEL_READY)
      } catch (err) {
        this.authenticated = false
      }
    },
    onUserLoggedIn () {
      this.authenticated = true
      this.init()
    }
  }
}
</script>

<style lang="scss">
  @import '#/_variables.scss';
  .app {
    height: 100vh;
    display: flex;
    background-color: $color-main-bgr;

    &__main,
    &__login {
      flex: 1;
      display: flex;
    }
  }
</style>
