<template>
  <b-container>
    <b-card>
      Buscar música (Vagalume.com)
      <b-input-group class="mt-3">
        <b-form-input
          @keydown="doSearch()"
          v-model="titleMusicSeach"
          descrption="Buscar da música (vagalume)"
        ></b-form-input>
        <template #append>
          <b-button @click="vagalumeSearch()">
            <div v-if="isLoading">
              <b-icon-search />
            </div>
            <div v-else>
              <b-spinner label="Spinning"></b-spinner>
            </div>
          </b-button>
        </template>
      </b-input-group>
      <b-list-group>
        <b-list-group-item
          v-for="music in musicsSearchResult"
          :key="music.id"
          button
          @click="selectMusic(music)"
        >
          {{ music.title }} <b> {{ music.band }} </b>
        </b-list-group-item>

        <b-list-group-item v-if="!hasResult"
          >Nenhum resultado para <b>{{ titleMusicSeach }}</b></b-list-group-item
        >
      </b-list-group>
    </b-card>
    <MusicDetail
      :title="selectedMusic.title"
      :band="selectedMusic.band"
      :letterOriginal="
        selectedMusic.letters != undefined
          ? selectedMusic.letters[0].letter
          : {}
      "
    />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selectedMusic: { title: null, band: null, letters: [{ letter: null }] },
      timer: 0,
      titleMusicSeach: '',
      musicsSearchResult: [],
      isLoading: true,
    }
  },
  mounted() {
    console.log('get bands')
    this.getBands()
    this.searchMusic()
  },
  computed: {
    hasResult() {
      return this.musicsSearchResult.length > 0
    },
  },
  methods: {
    getLetter(letters) {
      const size = letters.length
      if (size === 0) {
        return {}
      }
      if (size > 0) {
        return letters[0].letter
      }
    },
    doSearch() {
      this.isLoading = false
      if (
        this.titleMusicSeach !== undefined &&
        this.titleMusicSeach.length > 1
      ) {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.vagalumeSearch()
          return true
        }, 1000)
      }
      this.isLoading = true
      return false
    },
    selectMusic(music) {
      this.$api
        .get(`/music/search/${music.id}`)
        .then((result) => {
          this.selectedMusic = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
