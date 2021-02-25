<template>
  <b-container>
    <b-col>
      <b-row class="integrante-item">
        <h2>
          {{ title }} <i> ({{ description }})</i>
        </h2>
        <SlideImages :images="imgsslide" />
        <br />
        <i>Sobre</i>
        <p>
          {{ about }}
        </p>
        <br />
        <i>Influências</i>
        <p>{{ influences }}</p>
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    imgtitle: { type: String, default: '' },
    alt: { type: String, default: '' },
    about: { type: String, default: '' },
    influences: { type: String, default: '' },
    imgsslide: {
      default() {
        return { images: [String] }
      },
    },
  },
}
</script>
<style>
h2 {
  color: rgb(107, 102, 102);
}
.integrante-item {
  color: rgb(170, 170, 170);
  font-size: 16px;
  padding: 15px;
  margin-top: 15px;
}
</style>
