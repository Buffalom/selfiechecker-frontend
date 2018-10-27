<template>
  <div id="app">
    <div id="wallpaper" :style="{ 'background-image': baseUrl + 'img/icons/bscyb.png' }"></div>
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
  },
  computed: {
    baseUrl: () => process.env.BASE_URL
  }
}
</script>

<style lang="scss">
#app {
  #wallpaper {
    height: 100vh;
    width: 100vw;
    position: fixed;

    background-image: url(/img/bscyb.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
</style>
