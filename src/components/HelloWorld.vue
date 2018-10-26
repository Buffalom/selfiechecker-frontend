<template>
<v-container fill-height>
  
  <v-layout column align-center justify-center>
    <div>
      <input id="snap" type="file" accept="image/*;capture=camera" @change=onUpload hidden>
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
              <img :src="previewImage" class="uploading-image"/>
              
          </v-layout>
        </v-card>
        <v-card class="my-1">
          <v-layout align-center justify-center>
              
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
  data() {
    return {
      hasPic: true,
      previewImage: null
    };
  },
  methods: {
    chooseFiles() {
      document.getElementById("snap").click();
    },
    onUpload(e) {
      // upload file
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        this.hasPic = true;
      };
    }
  }
};
</script>

<style>
.uploading-image {
  display: flex;
  max-width: 80vw;
  max-height: 200px;
}
</style>




