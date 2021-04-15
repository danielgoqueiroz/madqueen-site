<template>
  <b-container>
    <b-card>
      <b-list-group>
        <b-list-group-item button v-for="music in musics" :key="music.id"
          >{{ music.title }} - ( {{ music.artist.name }} )</b-list-group-item
        >
      </b-list-group>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      musics: [],
    }
  },
  mounted() {
    this.getMusics()
  },
  methods: {
    getMusics() {
      this.$api
        .get('/music')
        .then((result) => {
          this.musics = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style></style>
