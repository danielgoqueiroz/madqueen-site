<template>
  <b-container>
    <b-link :to="path">
      <b-carousel-slide :caption="name" :text="about" :img-src="image" />
    </b-link>
  </b-container>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    about: { type: String, default: '' },
    path: { type: String, default: '' },
  },
}
</script>
<style>
.logo {
  text-align: center;
}
</style>
