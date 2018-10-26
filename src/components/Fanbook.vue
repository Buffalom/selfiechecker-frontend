<template>
  <div>
      <!-- Icons -->
      <v-layout justify-end>
          <v-icon :class="[{'primary': user.wins >= 1},'align-right ma-2']">grade</v-icon>
          <v-icon :class="[{'primary': user.wins >= 2},' ma-2']">local_florist</v-icon>
          <v-icon :class="[{'primary': user.wins >= 3},' ma-2']">wb_sunny</v-icon>
          <v-icon :class="[{'primary': user.wins >= 4},' ma-2']">brightness_low</v-icon>
          <v-icon :class="[{'primary': user.wins >= 5},' ma-2']">insert_emoticon</v-icon>
      </v-layout>

      <!-- Title -->
      <h1 class="ml-2">Fanbook of {{user.name}}</h1>

      <!-- CARDS with Players-->
      <v-layout row wrap>
            <v-flex v-for="player in players" :key="player.number" xs12 md4>
              <v-card class="my-1">
                <v-layout justify-space-between>
                    <span class="headline ma-1" v-text="player.name"></span>
                    <span class="headline ma-1" v-text="player.number"></span>
                </v-layout>
                <v-layout class="fixedSize" align-center justify-center>
                    <v-icon x-large v-if="!player.selfie">person</v-icon>
                    <v-img class="fixedSize" v-else :src="player.source"></v-img>
                </v-layout>
                <v-card-actions>
                  <v-btn color="primary">Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
      return {
        user: {
            name: "SuperFan",
            wins: 2
        },
        players: [
            {
                number: 1,
                name: "Marco Wölfli",
                selfie: false,
                source: ''
            },
            {
                number: 4,
                name: "Mohamed Ali Camara",
                selfie: false,
                source: ''
            },
            {
                number: 5,
                name: "Steve von Bergen",
                selfie: false,
                source: ''
            },
            {
                number: 6,
                name: "Leonardo Bertone",
                selfie: false,
                source: ''
            },
            {
                number: 7,
                name: "Miralem Sulejmani",
                selfie: true,
                source: 'https://tmssl.akamaized.net/images/portrait/originals/36080-1533136216.jpg'
            },
            {
                number: 8,
                name: "Djibril Sow",
                selfie: false,
                source: ''
            },
            {
                number: 13,
                name: "Nicolas Moumi Ngamaleu",
                selfie: false,
                source: ''
            },
            {
                number: 16,
                name: "Christian Fassnacht",
                selfie: false,
                source: ''
            },
            {
                number: 17,
                name: "Roger Assalé",
                selfie: true,
                source: 'https://tmssl.akamaized.net/images/portrait/originals/263183-1533136348.jpg'
            }
      ]
      }
  }
};
</script>

<style lang="css" scoped>
.fixedSize {
    height: 300px; 
    width: auto;
}
</style>

