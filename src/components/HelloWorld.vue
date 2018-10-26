<template>
<v-container row wrap >
  
  <v-layout row wrap align-center justify-center>
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
            <v-btn class="black--text" color="primary">Add to fanbook</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
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




