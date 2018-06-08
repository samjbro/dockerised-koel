<template>
  <nav id="sidebar">
    <ul class="nav-links">
      <li>
        <a
          href="#!/home"
          class="nav-link nav-link--home">Home</a>
      </li>
      <li>
        <a
          href="#!/songs"
          class="nav-link nav-link--songs">Songs</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @import "#/_variables.scss";
  #sidebar {
    flex: 0 0 256px;
    background-color: $color-sidebar-bgr;
    padding: 22px 0 0;
  }
</style>
