<template>
  <div class="integrants">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="1080"
      img-height="481"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <Integrante
        v-for="integrante in integrantes"
        :key="integrante.name"
        :name="integrante.name"
        :about="integrante.about"
        :image="integrante.image"
        :path="integrante.path"
      />
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      integrantes: [
        {
          path: '/about/manu',
          name: 'Manu',
          about: 'Vocal',
          image: require('@/static/images/slide/slide_manu.jpg'),
        },
        {
          path: '/about/dani',
          name: 'Dani',
          about: 'Baixo',
          image: require('@/static/images/slide/slide_dani.jpg'),
        },
        {
          path: '/about/marcio',
          name: 'Márcio',
          about: 'Guitarra',
          image: require('@/static/images/slide/slide_marcio.jpg'),
        },
      ],

      slide: 0,
      sliding: null,
    }
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
<style>
.integrants {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
