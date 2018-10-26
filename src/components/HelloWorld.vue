<template>
  <v-container fill-height>
    
    <v-layout column align-center justify-center>
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

      <div v-show="hasPic">
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <v-img :src="source"></v-img>
          </v-layout>
        </v-card>
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <v-img :src="outcome"></v-img>
          </v-layout>
          <v-layout>
            <ul>
              <li>Name: </li>
              <li>Number: </li>
              <li>Age: </li>
              <li>Nationality: </li>
              <li># of games: </li>
              <li># of goals: </li>
            </ul>
          </v-layout>
          <v-card-actions>
            <v-btn class="black--text" color="primary">Add to fanbook</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      hasPic: true,
    }
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




