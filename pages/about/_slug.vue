<template>
  <article>
    <b-card :title="about.title">
      <b-card-text>
        <img :src="getImage(about.imgtitle)" :alt="about.alt" />
        {{ about.sobre }}
        {{ about.description }}
        {{ about.imgsslide }}
        {{ about.influences }}
      </b-card-text>
    </b-card>
    <b-button>Voltar</b-button>
  </article>
</template>

<script>
export default {
  methods: {
    getImage(file) {
      return require(`@/static/${file}`)
    },
  },
  async asyncData({ $content, params }) {
    const about = await $content('about', params.slug).fetch()
    return { about }
  },
}
</script>

<style></style>
