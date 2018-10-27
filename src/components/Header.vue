<template>
  <div>
    <v-toolbar app>

      <v-layout justify-start>
        <v-img @click="$router.push('/')" max-height='30' contain :src="baseUrl + 'img/icons/mobiliar.png'"/>
      </v-layout>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  },
  computed: {
    baseUrl: () => process.env.BASE_URL,
    isOnRoot () {
      return this.$route.path.length <= 1
    }
  }
}
</script>
