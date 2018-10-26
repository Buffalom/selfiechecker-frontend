<template>
  <div id="app">
    <v-app>
     <AppHeader/>
      <router-view/>
      <AppFooter/>
    </v-app>
  </div> 
</template>

<script>
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";

export default {
  name: "app",
  components: {
    AppFooter,
    AppHeader
  }
};
</script>






