<template>
  <b-container>
    <b-img :src="logoLink"></b-img>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      logoLink: require('~/static/MadQueenLogo.png'),
    }
  },
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
