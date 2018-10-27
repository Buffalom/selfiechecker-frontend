<template>
  <div id="app">
    <div id="wallpaper"></div>
    <v-app>
      <AppHeader/>
      <v-content>
        <router-view/>
      </v-content>
      <!-- <AppFooter/> -->
    </v-app>
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue'
import AppHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss">
#app {
  #wallpaper {
    height: 100vh;
    width: 100vw;
    position: fixed;

    background: url(/img/bscyb.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
