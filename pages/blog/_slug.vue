<template>
  <article>
    <b-card>
      <nuxt-content :document="article" />
    </b-card>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
}
</script>

<style></style>
