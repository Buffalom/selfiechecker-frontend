<template>
<v-container grid-list-md text-xs-center>
  <div class="hello">
    <v-btn color='success'> FME </v-btn>
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




