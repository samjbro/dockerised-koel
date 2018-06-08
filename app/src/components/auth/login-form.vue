<template>
  <form @submit.prevent="login">
    <div class="logo">
      <img
        src="static/img/logo.svg"
        alt="logo">
    </div>
    <input
      v-model="email"
      type="email"
      placeholder="Email Address"
      autofocus
      required>
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      required>
    <button type="submit">
      Log In
    </button>
  </form>
</template>

<script>
import {userStore} from '@/stores'

export default {
  data () {
    return {
      email: '',
      password: '',
      failed: false
    }
  },
  methods: {
    async login () {
      try {
        await userStore.login(this.email, this.password)
        this.failed = false
        this.password = ''
        this.$emit('loggedin')
      } catch (err) {
        this.failed = true
      }
    }
  }
}
</script>
