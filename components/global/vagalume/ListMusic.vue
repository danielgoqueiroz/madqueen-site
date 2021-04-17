<template>
  <b-container>
    <b-overlay :show="show" rounded="sm">
      <b-card>
        <b-list-group>
          <b-list-group-item v-for="music in musics" :key="music.id" button
            >{{ music.title }} - ( {{ music.artist.name }} )</b-list-group-item
          >
        </b-list-group>
        <NuxtLink to="music/new"><b-icon-plus-circle /></NuxtLink>>
      </b-card>
    </b-overlay>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      show: true,
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
          this.show = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style></style>
