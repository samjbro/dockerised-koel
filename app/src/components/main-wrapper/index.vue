<template>
  <div class="main-wrapper">
    <sidebar/>
    <main-content/>
    <extra/>
  </div>
</template>

<script>
import sidebar from './sidebar/index.vue'
import mainContent from './main-content/index.vue'
import extra from './extra/index.vue'

export default {
  components: { sidebar, mainContent, extra }
}
</script>

<style lang="scss">
  .main-wrapper {
    flex: 1;
    display: flex;
  }
</style>
