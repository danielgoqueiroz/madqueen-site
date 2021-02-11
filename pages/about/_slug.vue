<template>
  <b-container>
    <article>
      <b-card
        :title="about.title"
        class="mb-2"
        style="max-width: 50rem"
        :img-src="getImage(about.imgtitle)"
        img-top
        :alt="about.alt"
      >
        <b-card-text>
          {{ about.sobre }}
          {{ about.description }}
          <br /><br />
          <l>{{ about.influences }}</l>
        </b-card-text>
        <b-button to="/"><b-icon-arrow-left-circle-fill /> </b-button>
      </b-card>
    </article>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const about = await $content('about', params.slug).fetch()
    return { about }
  },
  methods: {
    getImage(file) {
      return require(`@/static/${file}`)
    },
  },
}
</script>

<style></style>
