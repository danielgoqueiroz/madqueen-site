<template>
  <b-container>
    <Integrante
      v-for="integrante in integrantes"
      :key="integrante.title"
      :title="integrante.title"
      :description="integrante.description"
      :alt="integrante.alt"
      :about="integrante.about"
      :imgsslide="integrante.imgsslide"
      :influences="integrante.influences"
    />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      integrantes: {},
    }
  },
  async mounted() {
    this.integrantes = await this.$content('about').fetch()
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style></style>
