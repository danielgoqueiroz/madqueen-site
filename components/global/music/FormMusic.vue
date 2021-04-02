<template>
  <b-container
    ><h3>Nova Banda</h3>
    <h2><b-icon-plus /></h2>
    <b-card>
      <b-input
        class="my-1"
        v-model="music.title"
        placeholder="Nome da música"
      ></b-input>
      <b-input
        class="my-1"
        type="number"
        v-model="music.cratedYear"
        placeholder="Ano de criação"
      ></b-input>
      <b-row>
        <b-col>
          <b-form-textarea
            class="my-1"
            v-model="music.letterOriginal"
            placeholder="Letra Original"
            rows="10"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col>
          <b-form-textarea
            class="my-1"
            v-model="music.letterTranslation"
            placeholder="Letra Traduzida"
            rows="10"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-input
        type="url"
        class="my-1"
        v-model="music.youtubeLink"
        placeholder="Link youtube"
      ></b-input>
      <b-form-file
        class="my-1"
        v-model="music.imageLink"
        placeholder="Imagem"
      ></b-form-file>
      <b-button class="my-1" @click="save()">Salvar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      music: {
        title: '',
        cratedYear: 1990,
        letterOriginal: '',
        letterTranslation: '',
        youtubeLink: '',
        imageLink: null,
      },
    }
  },
  methods: {
    save() {
      $api.post('/music', music)
    },
  },
}
</script>
<style></style>
