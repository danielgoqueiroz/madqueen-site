<template>
  <b-container>
    <h1>Musicas</h1>
    <ListMusic />
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('Requisição 1')
    this.$api
      .$get('music')
      .then((result) => {
        console.log('Reposta')
        console.log(result)
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log('Sem autorização')
          console.log(err)
        }
      })
  },
}
</script>

<style></style>
