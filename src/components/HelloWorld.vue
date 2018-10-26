<template>
<v-container>
  
  <v-layout column justify-center>
    <v-layout justify-center>
      <input id="snap" type="file" accept="image/*;capture=camera" @change="onUpload" hidden>
      <v-btn
        @click="chooseFiles()"
        color="pink"
        dark    
        fab
        >
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-layout>
  
      <v-flex v-show="hasPic">
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <img :src="previewImage" class="uploading-image"/>
          </v-layout>
        </v-card>
        <v-card class="my-1">
          <v-layout align-center justify-center>
              <img :src="'https://tmssl.akamaized.net/images/portrait/originals/263183-1533136348.jpg'" class="uploading-image"/>
          </v-layout>
          <v-layout>
            <ul>
              <li>Name: Roger Assalé</li>
              <li>Number: 17</li>
              <li>Birthday: 13th of November</li>
              <li>Position: Striker</li>
              <li># of goals: 27</li>
              <li>Height: 1.67m</li>
              <li><strong>Prediction: 69%</strong></li>
            </ul>
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
  data() {
    return {
      hasPic: false,
      previewImage: null,
      offsetTop: 0
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

<style lang="css">
.uploading-image {
  display: flex;
  max-width: 80vw;
  max-height: 200px;
}
</style>




