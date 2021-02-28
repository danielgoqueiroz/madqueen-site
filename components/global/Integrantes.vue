<template>
  <b-container style="text-align: center">
    <h1>Integrantes</h1>

    <b-link
      v-for="integrante in integrantes"
      :key="integrante.title"
      class="btn"
      @click="integranteSelected = integrante"
    >
      <b-img
        class="avatar"
        :src="integrante.avatar"
        v-bind="avatarProps"
        rounded="circle"
      />
    </b-link>

    <Integrante
      :title="integranteSelected.title"
      :description="integranteSelected.description"
      :alt="integranteSelected.alt"
      :about="integranteSelected.about"
      :imgsslide="
        integranteSelected.imgsslide != undefined
          ? integranteSelected.imgsslide
          : []
      "
      :influences="integranteSelected.influences"
    />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      integranteSelected: {},
      integrantes: {},
      avatarProps: {
        width: 50,
        height: 50,
        class: 'm1',
      },
      error: '',
    }
  },
  async mounted() {
    await this.$content('about')
      .fetch()
      .then((result) => {
        this.integrantes = result
        this.integranteSelected = this.integrantes[0]
      })
      .catch((err) => {
        this.error = err
      })
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
<style>
.btn,
.btn:active,
.btn:link {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  border-radius: 100%;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
}
.avatar {
  opacity: 0.4;
  transition: 0.2s;
}
.avatar:hover {
  opacity: 1;
  -webkit-transform: scale(1.2);
}
</style>
