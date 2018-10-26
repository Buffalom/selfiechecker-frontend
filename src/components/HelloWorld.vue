<template>
  <div class="hello">
    <v-btn color='success'> FME </v-btn>
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
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

