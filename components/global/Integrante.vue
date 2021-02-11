<template>
  <b-container>
    <b-link :to="path">
      <b-carousel-slide :caption="name" :text="about" :img-src="image" />
    </b-link>
  </b-container>
</template>

<script>
export default {
  methods: {
    goTo() {
      this.$router.push(path)
    },
  },
  props: ['name', 'image', 'about', 'path'],
}
</script>
<style>
.logo {
  text-align: center;
}
</style>
