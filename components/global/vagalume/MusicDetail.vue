<template>
  <b-component fluid>
    <b-card bg-variant="light">
      <b-form-group>
        <b-form-input
          :value="title"
          @input="$emit('title', $event.target.title)"
          disabled
        />
        <b-form-input
          :value="band"
          @input="$emit('band', $event.target.band)"
          disabled
        />
        <b-form-textarea
          :value="letterOriginal"
          @input="$emit('letterOriginal', $event.target.letterOriginal)"
          rows="10"
          disabled
        />
        <b-button variant="success" @click="saveMusic()">Salvar</b-button>
      </b-form-group>
    </b-card>
  </b-component>
</template>

<script>
export default {
  name: 'MusicDetail',
  props: {
    title: {
      type: String,
      default: '',
    },
    band: {
      type: String,
      default: '',
    },
    letterTranslate: {
      type: String,
      default: '',
    },
    letterOriginal: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    saveMusic() {
      const music = {
        title: this.title,
        letterOriginal: this.letterOriginal,
        letterTranslation: this.letterTranslate,
        band: { name: this.band },
      }
      console.log(music)

      this.$api
        .post('/music', music)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
