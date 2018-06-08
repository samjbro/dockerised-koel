<template>
  <section id="mainContent">
    <home v-show="view === 'home'"/>
    <songs v-show="view === 'songs'"/>
  </section>
</template>

<script>
import home from './home.vue'
import songs from './songs.vue'
import { event } from '@/utils'

export default {
  components: {home, songs},

  data () {
    return {
      view: 'home'
    }
  },

  created () {
    event.on({
      [event.$names.LOAD_MAIN_VIEW]: view => {
        this.view = view
      }
    })
  }
}
</script>
