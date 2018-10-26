<template>
<v-container row wrap fill-height>
  
  <v-layout align-center justify-center>
    <div>
      <input id="fileUpload" type="file" accept="image/*;capture=camera" hidden>
      <v-btn
        @click="chooseFiles()"
        color="pink"
        dark    
        fab
        >
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </div>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    onUpload() {
      // upload file
    }
  }
};
</script>




