<template>
<v-container grid-list-md text-xs-center>
  <div class="hello">
    <v-btn color='primary' @click="openFanbook">FANBOOK</v-btn>
    <input id="fileUpload" type="file" accept="image/*;capture=camera" hidden>
    <v-btn
      @click="chooseFiles()"
      color="pink"
      dark    
      fab
      >
      <v-icon>camera_alt</v-icon>
    </v-btn>

    <v-layout row wrap>
      <v-flex xs12 md10>
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <v-img :src="source"></v-img>
          </v-layout>
        </v-card>
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <v-img :src="outcome"></v-img>
          </v-layout>
          <v-card-actions>
            <v-btn color="primary">Add to fanbook</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      </v-layout>

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
    openFanbook() {
      this.$router.push("/fanbook");
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    onUpload() {
      // upload file
    }
  }
};
</script>




