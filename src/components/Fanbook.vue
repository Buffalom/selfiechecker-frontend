<template>
  <div>
      <!-- HERE COMES ICONS -->
      <!-- Title -->
      <h4>Fanbook of {{user.name}}</h4>
      <!-- CARDS -->
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
        }
      }
  }
};
</script>

