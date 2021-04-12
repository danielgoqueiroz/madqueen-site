<template>
  <b-container>
    <b-card>
      Buscar música (Vagalume.com)
      <b-input-group class="mt-3">
        <b-form-input
          v-model="titleMusicSeach"
          descrption="Buscar da música (vagalume)"
        ></b-form-input>
        <template #append>
          <b-button @click="vagalumeSearch()"><b-icon-search /></b-button>
        </template>
      </b-input-group>
      <b-list-group>
        <b-list-group-item v-for="music in musicsSearchResult" :key="music.id">
          {{ music.title }} <b> {{ music.band }} </b>
        </b-list-group-item>

        <b-list-group-item v-if="!hasResult"
          >Nenhum resultado para <b>{{ titleMusicSeach }}</b></b-list-group-item
        >
      </b-list-group>
      <!-- <b-form-select
        v-model="music.band.id"
        :options="bands"
        :select-size="4"
      /> -->
      <!-- <b-input-group
        description="Adicionar música"
        label="Nova música"
        class="mt-3"
      >
        <b-form-input v-model="newBand.name" placeholder="Nome"></b-form-input>
        <b-input-group-append>
          <b-button
            @click="saveBand()"
            :disabled="newBand.name == null || newBand.name.length < 3"
            >Adicionar banda</b-button
          >
        </b-input-group-append>
      </b-input-group>

      <b-div v-show="music.band.id != null">
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
              v-model="music.letterOriginal"
              class="my-1"
              placeholder="Letra Original"
              rows="10"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
          <b-col>
            <b-form-textarea
              v-model="music.letterTranslation"
              class="my-1"
              placeholder="Letra Traduzida"
              rows="10"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-input
          v-model="music.youtubeLink"
          type="url"
          class="my-1"
          placeholder="Link youtube"
        ></b-input>
        <b-form-file
          v-model="music.imageLink"
          class="my-1"
          placeholder="Imagem"
        ></b-form-file>
        <b-button class="my-1" @click="save()">Salvar</b-button> -->
      <!-- </b-div> -->
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      timer: 0,
      titleMusicSeach: 'Haven and Hell',
      musicsSearchResult: [],
      newBand: {
        name: null,
      },
      bands: [],
      music: {
        band: {
          id: null,
        },
        title: '',
        cratedYear: 1990,
        letterOriginal: '',
        letterTranslation: '',
        youtubeLink: '',
        imageLink: null,
      },
    }
  },
  computed: {
    hasResult() {
      if (this.titleMusicSeach.length > 1) {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.vagalumeSearch()
          return true
        }, 1000)
      }
      return false
    },
  },
  mounted() {
    console.log('get bands')
    this.getBands()
    this.searchMusic()
  },
  methods: {
    vagalumeSearch() {
      this.$api
        .get(`music/search?title=${this.titleMusicSeach}`)
        .then((result) => {
          this.musicsSearchResult = []
          this.musicsSearchResult = result.data
        })
        .catch((err) => {
          console.log(err.data)
        })
    },
    async searchMusic() {
      await this.$api
        .get(`/music/search/vai passar`)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async saveBand() {
      console.log(this.newBand)
      await this.$api
        .post('band', this.newBand)
        .then((result) => {
          console.log(result)
          this.bands.push({ value: result.data.id, text: result.data.name })
          this.newBand = {}
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getBands() {
      this.$api
        .get('/band')
        .then((result) => {
          const bands = result.data.map((b) => {
            console.log(b)
            const band = {
              value: b.id,
              text: b.name,
            }
            return band
          })
          this.bands = bands
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async save() {
      console.log(this.music)
      await this.$api
        .post('/music', this.music)
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
