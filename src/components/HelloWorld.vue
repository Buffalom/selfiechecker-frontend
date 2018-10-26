<template>
  <div class="hello">
    <v-btn color='success' @click="openFanbook">FANBOOK</v-btn>
    <v-btn
              color="pink"
              dark
              small    
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    openFanbook() {
      this.$router.push('/fanbook');
    }
  }
};
</script>

