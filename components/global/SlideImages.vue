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
      <b-carousel-slide
        v-for="image in images"
        :key="image"
        :img-src="image"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      default() {
        return { images: [String] }
      },
    },
  },
  data() {
    return {
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
