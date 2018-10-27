<template>
  <div class="home">
    <v-container>
      <v-layout column justify-center>
        <v-layout justify-center>
          <input id="snap" type="file" accept="image/*capture=camera" @change="onUpload" hidden>
          <v-btn
            @click="chooseFiles()"
            color="#DA2323"
            dark
            fab
            class="v-btn--x-large"
            >
            <v-icon>camera_alt</v-icon>
          </v-btn>
        </v-layout>

        <v-layout justify-center>
          <v-progress-circular
          v-show="loading"
          :size="100"
          :width="15"
          indeterminate
          color="primary"
          >
          </v-progress-circular>
        </v-layout>

        <v-flex v-show="hasPic">
          <v-card class="my-1">
            <v-layout align-center justify-center>
                <img :src="previewImage" class="uploading-image"/>
            </v-layout>
          </v-card>
          <v-card class="my-1">
            <v-layout align-center justify-center>
                <img :src="player.imageUrl" class="uploading-image"/>
            </v-layout>
            <v-layout align-center justify-center>
              <v-flex sm6>
                <v-list two-line dense>
                  <template v-for="field in fields">
                    <v-list-tile :key="field.key">
                      <v-list-tile-content>
                        <v-list-tile-sub-title>{{ field.title }}</v-list-tile-sub-title>
                        <v-list-tile-title>{{ player[field.key] }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-btn class="black--text" color="primary">Add to fanbook</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      hasPic: false,
      loading: false,
      previewImage: null,
      offsetTop: 0,
      fields: [
        { title: 'Name', key: 'name' },
        { title: 'Nationality', key: 'nationality' },
        { title: 'Number', key: 'jerseyNumber' },
        { title: 'Position', key: 'position' },
        { title: 'Foot', key: 'foot' },
        { title: 'Age', key: 'age' },
        { title: 'Birthday', key: 'birthday' },
        { title: 'Birthplace', key: 'birthplace' },
        { title: 'Height', key: 'height' }
      ],
      player: {}
    }
  },
  methods: {
    chooseFiles () {
      document.getElementById('snap').click()
    },
    onUpload (e) {
      // upload file
      const image = e.target.files[0]
      const reader = new FileReader()
      const reader2 = new FileReader()
      reader2.readAsDataURL(image)
      reader2.onload = e => {
        this.previewImage = e.target.result
      }
      reader.readAsArrayBuffer(image)
      reader.onload = e => {
        this.loading = true
        this.axios({
          method: 'put',
          url: process.env.VUE_APP_API_BASE + '/player/',
          headers: {
            'Content-Type': 'text/octet-stream',
            'Content-Disposition': 'attachment;filename="image.jpg"'
          },
          data: e.target.result
        }).then(response => {
          this.player = response.data
          this.hasPic = true
        }).catch(error => {
          if (error) {
            console.error(error)
          }
        }).finally(response => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn--x-large {
  width: 150px;
  height: 150px;

  i {
    font-size: 50px;
  }
}

.uploading-image {
  display: flex;
  max-width: 80vw;
  max-height: 200px;
}
</style>
