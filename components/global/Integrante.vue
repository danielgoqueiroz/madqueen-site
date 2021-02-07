<template>
  <b-container>
    <b-carousel-slide
      :caption="name"
      :text="about"
      :img-src="image"
    ></b-carousel-slide>
  </b-container>
</template>

<script>
export default {
  props: ['name', 'image', 'about'],
}
</script>
<style>
.logo {
  text-align: center;
}
</style>
