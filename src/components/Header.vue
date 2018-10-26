<template>
  <div>
     <v-navigation-drawer app>

      

     </v-navigation-drawer>
      <v-toolbar app>

        <v-layout justify-start>
            <v-img max-height='40' contain src="/img/icons/mobiliar.png"/>
        </v-layout>

        <v-layout justify-end>
            <v-btn class="black--text" color='primary' @click="openFanbook">FANBOOK</v-btn> 
        </v-layout>

      </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    openFanbook() {
      this.$router.push("/fanbook");
    }
  }
};
</script>

