<template>
  <b-container>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <Integrante
        name="Manu"
        about="Sobre o integrante"
        image="https://picsum.photos/600/300/?image=25"
      />
    </b-carousel>
  </b-container>
</template>

<script>
import Integrante from './Integrante.vue'
export default {
  components: { Integrante },
}
</script>
<style></style>
